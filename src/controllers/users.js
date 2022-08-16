import User from '../models/users'

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      message: 'Get done',
      data: users,
      error: false,
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Ocurrio un error, porfavor volve a intentarlo mas tarde',
      data: error,
      error: true,
    });
  }
}

const getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (user) {
        return res.status(200).json({
          message: 'Usuario encontrado',
          data: user,
          error: false,
        })
      } else {
        return res.status(200).json({
          message: 'No se pudo encontrar el usuario',
          data: undefined,
          error: false,
        })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Ocurrio un error, porfavor volve a intentarlo mas tarde',
        data: error,
        error: true,
      });
    }
  }

  const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({
          message: 'Este usuario no existe',
          data: undefined,
          error: true,
        });
      } else {
        return res.status(200).json({
          message: 'Usuario borrado',
          data: undefined,
          error: false,
        })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Ocurrio un error, porfavor volve a intentarlo mas tarde',
        data: error,
        error: true,
      });
    }
  }

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
    { new: true },);
    if (!user) {
      return res.status(404).json({
        message: 'El usuario no existe',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Usuario actualizado',
      data: user,
      error: false,
    });
    } catch (error) {
      return res.status(400).json({
        message: 'Ocurrio un error, porfavor volve a intentarlo mas tarde',
        data: error,
        error: true,
      });
    }
  }

export default {
    getUsers, deleteUser, updateUser, getUserById
}