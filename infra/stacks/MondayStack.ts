import { StackContext, Api } from '@serverless-stack/resources';

export function MondayStack({ stack }: StackContext) {
  new Api(stack, 'RestApi', {
    routes: {
      'GET /lambda': 'handlers/lambdaHandler.getAllLambdas',
    },
  });
}
