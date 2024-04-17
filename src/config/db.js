import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://jesuhernan232:jesus1234@cluster1.by7rknx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

//Este archivo es para crear la conexion a base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect DB");
  } catch (error) {
    console.log(error);
  }
};
