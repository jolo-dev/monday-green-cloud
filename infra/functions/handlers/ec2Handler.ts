import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { getEc2s } from 'lib/ec2s';

export const getAllEc2: APIGatewayProxyHandlerV2 = async () => {
  const ec2 = await getEc2s();
    
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ec2),
  };
};