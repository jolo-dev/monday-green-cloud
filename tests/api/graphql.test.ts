import { describe, it } from 'vitest';
import { schema } from '../../src/api/src/graphql';
import { printSchema } from 'graphql';

describe('api/src/graphql', () => {
  it('should create a graphql schema', async () => {
    console.log('test', printSchema(schema));
  });
});
