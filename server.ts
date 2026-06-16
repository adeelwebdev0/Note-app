import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./configs/db.ts";
import notesRoutes from "./routes/notesRoute.ts";
dotenv.config();
await connectDb();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", notesRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is runnig odn this port ${PORT} ✅✅`);
});
