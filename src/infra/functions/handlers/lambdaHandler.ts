import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { getLambdas } from '../lib/lambdas';

export const getAllLambdas: APIGatewayProxyHandlerV2 = async () => {
  const lambdas = await getLambdas();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lambdas),
  };
};

