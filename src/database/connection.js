import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


export const connect = async () => {
  const { MONGODB_URI } = process.env

  if(MONGODB_URI) {
    return await mongoose.connect(MONGODB_URI)
  }
}
