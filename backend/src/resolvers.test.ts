// import mongoose from "mongoose";
// import resolvers from "./resolvers";
// import SalesData, { generateSalesData } from "./salesDataModel";
// import dotenv from "dotenv";
// dotenv.config();

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

import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers"; // Assuming you have defined the resolvers properly
import typeDefs from "./typeDefs";
import { graphql, ExecutionResult } from "graphql";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Mocked query function
const query = async ({ query }: { query: string }) => {
  const result: ExecutionResult = await graphql({
    schema, // Pass the 'schema' here
    source: query, // Pass the 'query' here
  });

  return result;
};

describe("Queries", () => {
  it("fetches list of sales", async () => {
    const GET_SALES = `
      {
        sales {
          product
          salesRevenue
        }
      }
    `;
    const res = await query({ query: GET_SALES });

    // Add your snapshot testing or other assertions here
    expect(res).toMatchSnapshot();
  });
});
