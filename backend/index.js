import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import formRoutes from "./routes/formRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

console.log(process.env.MONGO_URI);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
