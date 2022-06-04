import { gql, ApolloServer } from "apollo-server-lambda";
import {ListFunctionsCommandOutput} from '@aws-sdk/client-lambda'

const typeDefs = gql`
  type Query {
    hello: String,
    lambdas: ListFunctionsCommandOutput
  }
`;

const resolvers = {
  Query: {
    hello: () => "Still works",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: !!process.env.IS_LOCAL,
});

export const handler = server.createHandler();