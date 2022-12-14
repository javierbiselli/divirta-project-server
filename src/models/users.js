import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: Number, required: true },
  firebaseUid: { type: String, required: true },
  ownSalons: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Salon" },
      addedOn: { type: String },
    },
  ],
  hiredSalons: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Salon" },
      hiredOn: { type: Date },
    },
  ],
});

export default mongoose.model("User", userSchema);
