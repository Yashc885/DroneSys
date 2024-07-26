// models/serviceModel.ts
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default Service;
