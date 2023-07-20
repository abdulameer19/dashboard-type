import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import mongoose from "mongoose";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import dotenv from "dotenv";
dotenv.config();
async function startServer() {
  await mongoose.connect(`${process.env.MONGO_URI}`);
  console.log(`🚀 Connected to Mongo at ${process.env.MONGO_URI}`);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // enables introspection of the schema
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at ${url}`);
}
startServer();
