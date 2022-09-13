import User from "../models/users";
import firebaseApp from "../firebase";

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("ownSalons.id", [
      "name",
      "tel",
      "address",
      "images",
      "description",
      "facebook",
      "instagram",
      "whatsapp",
      "email",
    ]);
    return res.status(200).json({
      message: "Get done",
      data: users,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error, porfavor volve a intentarlo mas tarde",
      data: error,
      error: true,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("ownSalons.id", [
      "name",
      "tel",
      "address",
      "images",
      "description",
      "facebook",
      "instagram",
      "whatsapp",
      "email",
    ]);
    if (user) {
      return res.status(200).json({
        message: "Usuario encontrado",
        data: user,
        error: false,
      });
    } else {
      return res.status(200).json({
        message: "No se pudo encontrar el usuario",
        data: undefined,
        error: false,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error, porfavor volve a intentarlo mas tarde",
      data: error,
      error: true,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "Este usuario no existe",
        data: undefined,
        error: true,
      });
    } else {
      return res.status(200).json({
        message: "Usuario borrado",
        data: undefined,
        error: false,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error, porfavor volve a intentarlo mas tarde",
      data: error,
      error: true,
    });
  }
};

const addUser = async (req, res) => {
  let firebaseUid;
  try {
    const newFirebaseUser = await firebaseApp.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });
    firebaseUid = newFirebaseUser.uid;

    await firebaseApp
      .auth()
      .setCustomUserClaims(newFirebaseUser.uid, { role: "USER" });

    const newUser = await User.create({
      firebaseUid: newFirebaseUser.uid,
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
      tel: req.body.tel,
    });
    return res.status(201).json({
      message: "Usuario agregado",
      data: newUser,
      error: false,
    });
  } catch (error) {
    if (firebaseUid) {
      await firebaseApp.auth().deleteUser(firebaseUid);
    }
    return res.status(400).json({
      message: error.message,
      data: undefined,
      error: true,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        tel: req.body.tel,
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        message: "El usuario no existe",
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: "Usuario actualizado",
      data: user,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error, porfavor volve a intentarlo mas tarde",
      data: error,
      error: true,
    });
  }
};

const addOwnSalonToUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          ownSalons: req.body.ownSalons,
        },
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        message: "El usuario no existe",
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: "Salon agregado a usuario correctamente",
      data: user,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrio un error, porfavor volve a intentarlo mas tarde",
      data: error,
      error: true,
    });
  }
};

export default {
  getUsers,
  deleteUser,
  updateUser,
  getUserById,
  addUser,
  addOwnSalonToUser,
};
