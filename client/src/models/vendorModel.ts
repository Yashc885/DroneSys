// models/vendorModel.ts
import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    pin: {
        type: String,
        required: true,
    }
}, { _id: false }); // Prevents creating an _id for the embedded schema

const vendorSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    company_name: {
        type: String,
        required: true,
    },
    company_email: {
        type: String,
        required: true,
        unique: true,
    },
    company_contact: {
        type: String,
        required: true,
    },
    company_address: addressSchema,
}, { timestamps: true });

const Vendor = mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema);

export default Vendor;
