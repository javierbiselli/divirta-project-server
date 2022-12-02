import Salon from "../models/salon";

const getSalons = async (req, res) => {
  try {
    const salons = await Salon.find({})
      .populate("owner", ["name", "last_name"])
      .populate("comments.commenter", ["name", "last_name"]);
    return res.status(200).json({
      message: "Get done",
      data: salons,
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

const createSalon = async (req, res) => {
  try {
    const salonData = req.body;
    const newSalon = await Salon.create(salonData);
    return res.status(201).json({
      message: "Salon agregado correctamente!",
      data: newSalon,
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

const getSalonById = async (req, res) => {
  try {
    const salon = await Salon.findById(req.params.id).populate("owner", [
      "name",
      "last_name",
    ]);
    if (salon) {
      return res.status(200).json({
        message: "Salon encontrado",
        data: salon,
        error: false,
      });
    } else {
      return res.status(200).json({
        message: "No se pudo encontrar el salon",
        data: undefined,
        error: true,
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

const deleteSalon = async (req, res) => {
  try {
    const salon = await Salon.findByIdAndDelete(req.params.id);
    if (!salon) {
      return res.status(404).json({
        message: "Este salon no existe",
        data: undefined,
        error: true,
      });
    } else {
      return res.status(200).json({
        message: "Salon borrado",
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

const updateSalon = async (req, res) => {
  try {
    const salon = await Salon.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        rate: req.body.rate,
        tel: req.body.tel,
        address: req.body.address,
        images: req.body.images,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        whatsapp: req.body.whatsapp,
        email: req.body.email,
        description: req.body.description,
        comments: req.body.comments,
      },
      { new: true }
    );
    if (!salon) {
      return res.status(404).json({
        message: "El salon no existe",
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: "Salon actualizado",
      data: salon,
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
  createSalon,
  getSalons,
  deleteSalon,
  updateSalon,
  getSalonById,
};
