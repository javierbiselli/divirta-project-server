import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
  url: { type: String, required: true },
});

const salonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rate: { type: Number, required: true },
  tel: { type: Number, required: true },
  address: { type: String, required: true },
  images: [imagesSchema],
  facebook: { type: String },
  instagram: { type: String },
  whatsapp: { type: String },
  email: { type: String },
  description: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
export default mongoose.model("Salon", salonSchema);
