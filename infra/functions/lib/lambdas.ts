import {
  LambdaClient,
  ListFunctionsCommandInput,
  ListFunctionsCommand,
} from '@aws-sdk/client-lambda';

const region = process.env.AWS_REGION;
const client = new LambdaClient({ region });

export const getLambdas = async (input: ListFunctionsCommandInput = {}) => {
  try {
    const listFunctions = new ListFunctionsCommand(input);
    const data = await client.send(listFunctions);
    return data.Functions ?? [];
  } catch (error) {
    const e = error as Error;
    console.error(e.name, e.message);
  }
};
