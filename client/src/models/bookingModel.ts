import mongoose from 'mongoose';

const { Schema } = mongoose;

const BookingSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    drone_services_info_id: { type: String },
    address: {
        address1: { type: String },
        address2: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        pin: { type: String }
    },
    is_fullday: { type: Boolean },
    booking_info: {
        start_date: { type: Date },
        end_date: { type: Date }
    },
    price: { type: Number },
    name: { type: String },
    email: { type: String },
    phone_number: { type: String },
    status: { type: String, enum: ['Confirmed', 'Pending', 'Cancelled'] },
    cancelled_reason: { type: String }, 
} , { timestamps: true } );

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

export default Booking;
