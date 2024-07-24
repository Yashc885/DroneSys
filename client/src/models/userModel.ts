// models/userModel.ts
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['customer', 'provider'],
        required: true,
    },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

