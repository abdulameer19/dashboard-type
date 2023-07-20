import mongoose, { Schema, Document, Model } from "mongoose";
import { faker } from "@faker-js/faker";

interface ISalesData extends Document {
  product: string;
  department: string;
  price: string;
  salesRevenue: number;
  region: string;
}

const SalesDataSchema = new mongoose.Schema({
  product: String,
  department: String,
  price: String,
  salesRevenue: Number,
  region: String,
});

const SalesData: Model<ISalesData> = mongoose.model<ISalesData>(
  "SalesData",
  SalesDataSchema
);

// Generate sales data
export function generateSalesData(): ISalesData[] {
  const salesData: ISalesData[] = [];
  for (let i = 0; i < 100; i++) {
    const salesEntry: ISalesData = new SalesData({
      product: faker.commerce.productName(),
      department: faker.commerce.department(),
      price: faker.commerce.price({ min: 100, max: 200 }),
      salesRevenue: faker.number.int({ min: 50, max: 500 }),
      region: faker.location.country(),
    });
    salesData.push(salesEntry);
  }
  return salesData;
}

// Insert the data into MongoDB
SalesData.insertMany(generateSalesData())
  .then(() => {
    console.log("Data inserted successfully.");
    mongoose.connection.close(); // Close the connection after insertion
  })
  .catch((err: Error) => {
    console.error("Data insertion failed: ", err);
  });

export default SalesData;
