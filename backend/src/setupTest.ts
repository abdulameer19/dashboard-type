// setupTest.js
import dotenv from "dotenv";
dotenv.config();
// salesDataModel.ts
import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

// Configure the MongoDB connection options
const mongooseOptions: ConnectOptions = {};

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, mongooseOptions)
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Rest of the code...
