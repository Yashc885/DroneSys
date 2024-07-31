import mongoose from 'mongoose';

// Define the description schema
const descriptionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    weight: { type: String, required: true },
    max_ascent_speed: { type: String, required: true },
    max_descent_speed: { type: String, required: true },
    max_forward_speed: { type: String, required: true },
    max_ceiling: { type: String, required: true },
    max_flight_time: { type: String, required: true },
    max_weight_carry: { type: String, required: true },
    memory_storage: { type: String, required: true },
}, { _id: false });

// Define the price info schema
const priceInfoSchema = new mongoose.Schema({
    hourly_price: { type: String, required: true },
    fullday_price: { type: String, required: true },
}, { _id: false });

// Define the drone service schema
const droneServiceSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    drone_services_id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: descriptionSchema, required: true },
    price_info: { type: priceInfoSchema, required: true },
}, { timestamps: true });

// Use a model if it doesn't already exist
const DroneService = mongoose.models.DroneService || mongoose.model('DroneService', droneServiceSchema);

export default DroneService;
