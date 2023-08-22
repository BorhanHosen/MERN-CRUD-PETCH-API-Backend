import express, { application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./db/ConnectDB.js";
import ProductRoutes from "./routes/ProductRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", ProductRoutes);
const port = process.env.PORT || 8000;
const DATABASE_URI = process.env.DATABASE_URI;
ConnectDB(DATABASE_URI);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
