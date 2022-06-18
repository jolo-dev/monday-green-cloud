import { EC2Client, DescribeInstancesCommand, DescribeInstancesCommandInput } from '@aws-sdk/client-ec2';

const region = process.env.AWS_REGION;
const client = new EC2Client({ region });

export const getEc2s = async (input: DescribeInstancesCommandInput = {}) => {
  try {
    const listFunctions = new DescribeInstancesCommand(input);
    const data = await client.send(listFunctions);
    return data.Reservations ?? [];
  } catch (error) {
    const e = error as Error;
    console.error(e.name, e.message);
  }
};