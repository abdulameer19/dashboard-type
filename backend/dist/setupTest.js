"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// setupTest.js
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// salesDataModel.ts
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = process.env.MONGO_URI || "";
// Configure the MongoDB connection options
const mongooseOptions = {};
// Connect to MongoDB
mongoose_1.default
    .connect(MONGO_URI, mongooseOptions)
    .then(() => {
    console.log("Connected to MongoDB.");
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
});
// Rest of the code...
