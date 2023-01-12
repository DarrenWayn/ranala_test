import express from "express";
import mongoose from "mongoose";

import cors from "cors";
import { config } from "dotenv";

config();

const PORT = 5001;
const MONGO_URL = ""
const app = express();

app.use(cors({ origin: "*" }));
// Express middleware function
// This helps to understand and parse application/json in headers
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URL!)
  .then(() => {
    console.log(`Listening on Port:${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => console.error("Connect fail", err));

