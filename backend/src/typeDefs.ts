import { gql } from "graphql-tag";

const typeDefs = gql`
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

export default typeDefs;
