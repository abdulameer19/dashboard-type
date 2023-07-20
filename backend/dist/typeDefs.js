"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const typeDefs = (0, graphql_tag_1.gql) `
  type Query {
    getSalesData: [SalesData]
  }

  type SalesData {
    id: ID
    product: String
    department: String
    price: String
    salesRevenue: Float
    region: String
  }
`;
exports.default = typeDefs;
