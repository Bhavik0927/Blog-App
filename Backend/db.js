import mongoose from "mongoose";

const connectDB = async () => { 
    try {
        const mongoURI = process.env.MONGODB_URL;
        await mongoose.connect(mongoURI)
        console.log(`Connected to MongoDB` );
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;


