import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
  url: { type: Object, required: true },
});

const commentsSchema = new mongoose.Schema({
  comment: { type: String },
  rating: { type: Number },
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: String },
});

const salonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tel: { type: Number, required: true },
  address: { type: String, required: true },
  images: [imagesSchema],
  facebook: { type: String },
  instagram: { type: String },
  whatsapp: { type: String },
  email: { type: String },
  description: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [commentsSchema],
});
export default mongoose.model("Salon", salonSchema);
