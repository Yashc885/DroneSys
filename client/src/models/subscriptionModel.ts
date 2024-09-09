import mongoose, { Schema } from 'mongoose';

// Define an enum for the subscription plan options
enum Plan {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

// Define the schema for the subscription model
const SubscriptionSchema: Schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  transaction_id: {
    type: String,
    required: true,
    unique: true, // Ensures unique transaction IDs
  },
  plan: {
    type: String,
    enum: [Plan.MONTHLY, Plan.YEARLY],
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  expiry_date: {
    type: Date,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now, 
  },
});
const Subscription = mongoose.model('Subscription', SubscriptionSchema);

export default Subscription;
