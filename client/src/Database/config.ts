import mongoose from 'mongoose';
const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://yashchoudhary88505:kBmjdpxw2iuSWmvw@cluster0.nfzxryj.mongodb.net/DRONE?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

export default connect;
