import mongoose from 'mongoose';

const { Schema } = mongoose;

const BookingSchema = new Schema({
    user_id: { type: String, required: true },
    drone_services_info_id: { type: String, required: true },
    address: {
        address1: { type: String, required: true },
        address2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        pin: { type: String, required: true }
    },
    is_fullday: { type: Boolean, required: true },
    booking_info: {
        start_date: { type: Date, required: true },
        start_time: { type: String, required: true },
        end_date: { type: Date, required: true },
        end_time: { type: String, required: true }
    },
    status: { type: String, enum: ['booked', 'booked-confirm', 'cancled'], required: true },
    cancled_reason: { type: String },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now }
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

export default Booking;
