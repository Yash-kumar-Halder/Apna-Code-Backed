import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URI );
        console.log("Connected to MongoDB successfully");
        
    } catch (error) {
        console.log(`Error connecting to database: ${error.message}`);
        process.exit(1);
    }
}