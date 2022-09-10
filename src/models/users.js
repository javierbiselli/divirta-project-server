import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
  firebaseUid: { type: String, required: true },
  ownSalons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Salon",
    },
  ],
  hiredSalons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Salon",
    },
  ],
});

export default mongoose.model("User", userSchema);
