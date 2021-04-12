import { Schema, model } from 'mongoose';

const CarSchema = new Schema({
    description: { type: String, required: true},
    make: { type: String, required: true },
    model: { type: String, required: true },
    estimatedate: { type: String },
    id: { type: Number },
    km: { type: Number },
    image: { type: String },
    person: { type: String}
});

export default model('Car', CarSchema);