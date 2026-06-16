import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log("Database is connected 🥂");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
