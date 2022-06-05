import { gql, ApolloServer } from 'apollo-server-lambda';
import { getLambdas } from './lambdas';
import { createSchema } from 'ts2graphql';

export const schema = createSchema(__dirname + '/models/Lambda.type.ts');

const typeDefs = gql`
  type Query {
    hello: String
    lambdas: [String]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Still works',
    lambdas: async () => await getLambdas(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: !!process.env.IS_LOCAL,
});

export const handler = server.createHandler();
