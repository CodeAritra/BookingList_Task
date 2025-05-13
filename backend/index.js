import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import formRoutes from "./routes/formRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/forms", formRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
