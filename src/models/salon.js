import mongoose from "mongoose";

const salonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rate: { type: Number, required: true },
    tel: { type: Number, required: true },
    address: { type: String, required: true },
})

export default mongoose.model('Salon', salonSchema);