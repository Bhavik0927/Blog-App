import mongoose from "mongoose";

const connectDB = async () => { 
    try {
        const mongoURI = 'mongodb+srv://bhaviktembhare2:8HI4bUEE1AUDmWUj@cluster0.rhv0uu2.mongodb.net/Blog-App?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(mongoURI)
        console.log(`Connected to MongoDB ${mongoURI}` );
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;


