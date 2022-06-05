import { GraphQLApi, StackContext } from '@serverless-stack/resources';
import path from 'path';

export function MyStack({ stack }: StackContext) {
  // Create the GraphQL API
  const api = new GraphQLApi(stack, 'ApolloApi', {
    server: {
      handler: 'src/graphql.handler',
      bundle: {
        format: 'cjs',
      },
    },
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
