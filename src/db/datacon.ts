import mongoose from "mongoose";
export const connectDb = async()=>{
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO!);
    console.log("Db Connected!");
}