import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const uri = await mongoose.connect(
      process.env.MONGO_URI || "MONGO_URI=mongodb://localhost:27017/notes",
    );
    console.log("Database is connected 🥂");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
