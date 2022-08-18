import mongoose from "mongoose";

const salonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rate: { type: Number, required: true },
    tel: { type: Number, required: true },
    address: { type: String, required: true },
    images: [
        {url: { type: String, required: true }}
    ],
    social: [
        {facebook: { type: String }},
        {instagram: { type: String }},
        {whatsapp: { type: String }},
        {email: { type: String }}
    ],
    description: { type: String, required: true }
})

export default mongoose.model('Salon', salonSchema);