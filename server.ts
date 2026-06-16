import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./configs/db.ts";

dotenv.config();
connectDb();
const app = express();

app.use(cors());

app.use(express.json());
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is runnig odn this port ${PORT} ✅✅`);
});
