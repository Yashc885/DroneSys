// models/Email.js
import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.Email || mongoose.model('Email', emailSchema);
