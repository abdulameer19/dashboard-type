"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSalesData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const faker_1 = require("@faker-js/faker");
const SalesDataSchema = new mongoose_1.default.Schema({
    product: String,
    department: String,
    price: String,
    salesRevenue: Number,
    region: String,
});
const SalesData = mongoose_1.default.model("SalesData", SalesDataSchema);
// Generate sales data
function generateSalesData() {
    const salesData = [];
    for (let i = 0; i < 100; i++) {
        const salesEntry = new SalesData({
            product: faker_1.faker.commerce.productName(),
            department: faker_1.faker.commerce.department(),
            price: faker_1.faker.commerce.price({ min: 100, max: 200 }),
            salesRevenue: faker_1.faker.number.int({ min: 50, max: 500 }),
            region: faker_1.faker.location.country(),
        });
        salesData.push(salesEntry);
    }
    return salesData;
}
exports.generateSalesData = generateSalesData;
// Insert the data into MongoDB
SalesData.insertMany(generateSalesData())
    .then(() => {
    console.log("Data inserted successfully.");
    mongoose_1.default.connection.close(); // Close the connection after insertion
})
    .catch((err) => {
    console.error("Data insertion failed: ", err);
});
exports.default = SalesData;
