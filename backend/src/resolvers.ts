// resolvers.ts

import mongoose from "mongoose";
import SalesData from "./salesDataModel";

const resolvers = {
  Query: {
    getSalesData: async () => {
      try {
        if (mongoose.connection.readyState !== 1) {
          await mongoose.connect(process.env.MONGO_URI!, {});
        }

        const data = await SalesData.find();
        return data;
      } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          console.error("Validation Error Details:", error.errors);
        }
        throw error; // re-throw the error to propagate it further if needed
      }
    },
  },
};

export default resolvers;
