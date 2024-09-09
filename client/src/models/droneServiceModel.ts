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


const priceInfoSchema = new mongoose.Schema({
    hourly_price: { type: String, required: true },
    fullday_price: { type: String, required: true },
}, { _id: false });

const imageSchema = new mongoose.Schema({
    type: { type: String, enum: ['url', 'file'], required: true }, // 'url' or 'file'
    path: { type: String, required: true }, // URL or file path
}, { _id: false });

const droneServiceSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    drone_services_id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: descriptionSchema, required: true },
    price_info: { type: priceInfoSchema, required: true },
    images: [imageSchema], 
    location: { type: String, required: true }, 
    // move: { type: String, required: true }, 
    // Availablity: { type: String, enum: ['Available', 'Unavailable'] },
}, { timestamps: true });

const DroneService = mongoose.models.DroneService || mongoose.model('DroneService', droneServiceSchema);

export default DroneService;
