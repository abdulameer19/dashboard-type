"use strict";
// import mongoose from "mongoose";
// import resolvers from "./resolvers";
// import SalesData, { generateSalesData } from "./salesDataModel";
// import dotenv from "dotenv";
// dotenv.config();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// describe("Queries", () => {
//   beforeAll(async () => {
//     // Connect to the MongoDB Atlas cluster
//     await mongoose.connect(process.env.MONGO_URI!, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     } as any);
//   });
//   afterAll(async () => {
//     // Disconnect from the MongoDB server
//     await mongoose.disconnect();
//   });
//   it("fetches list of sales", async () => {
//     // Generate test sales data and insert it into the database
//     const testSalesData = generateSalesData();
//     await SalesData.insertMany(testSalesData);
//     // Call the getSalesData resolver function directly
//     const result = await resolvers.Query.getSalesData();
//     // Expectations
//     expect(result).toHaveLength(testSalesData.length);
//     // You can add more specific assertions for the data returned by the resolver
//     expect(result[0].product).toBe(testSalesData[0].product);
//     expect(result[0].salesRevenue).toBe(testSalesData[0].salesRevenue);
//     // Add more assertions based on your data structure
//     // ... more tests as needed ...
//   });
// });
// import mathOperations from "./calculator";
// describe("Calculator Tests", () => {
//   test("Addition of 2 numbers", () => {
//     // arrange and act
//     var result = mathOperations.sum(1, 2);
//     // assert
//     expect(result).toBe(3);
//   });
//   test("Subtraction of 2 numbers", () => {
//     // arrange and act
//     var result = mathOperations.diff(10, 2);
//     // assert
//     expect(result).toBe(8);
//   });
//   test("Multiplication of 2 numbers", () => {
//     // arrange and act
//     var result = mathOperations.product(2, 8);
//     // assert
//     expect(result).toBe(16);
//   });
//   test("Division of 2 numbers", () => {
//     // arrange and act
//     var result = mathOperations.divide(24, 8);
//     // assert
//     expect(result).toBe(3);
//   });
// });
// describe('Queries', () => {
//   it('fetches list of sales', async () => {
//   const GET_SALES = `
//   {
//   sales {
//   product
//   salesRevenue
//   }
//   }
//   `;
//   const res = await query({ query: GET_SALES });
//   expect(res).toMatchSnapshot();
//   });
//  });
const schema_1 = require("@graphql-tools/schema");
const resolvers_1 = __importDefault(require("./resolvers")); // Assuming you have defined the resolvers properly
const typeDefs_1 = __importDefault(require("./typeDefs"));
const graphql_1 = require("graphql");
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
});
// Mocked query function
const query = ({ query }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, graphql_1.graphql)({
        schema,
        source: query, // Pass the 'query' here
    });
    return result;
});
describe("Queries", () => {
    it("fetches list of sales", () => __awaiter(void 0, void 0, void 0, function* () {
        const GET_SALES = `
      {
        sales {
          product
          salesRevenue
        }
      }
    `;
        const res = yield query({ query: GET_SALES });
        // Add your snapshot testing or other assertions here
        expect(res).toMatchSnapshot();
    }));
});
