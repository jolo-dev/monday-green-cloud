/* eslint-disable @typescript-eslint/no-var-requires */
import { describe, it, expect, afterEach, vi } from 'vitest';
import { getLambdas } from '../../../src/infra/functions/lib/lambdas';

vi.mock('../../../src/infra/functions/lib/lambdas', () => {
  const dummyLambda = require('./lambda.json');
  return {
    getLambdas: vi.fn().mockResolvedValue([dummyLambda]),
  };
});

describe('api/src/lambdas', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should get all Lambdas', async () => {
    const lambdas = await getLambdas();
    const dummyLambda = require('./lambda.json');
    expect(lambdas).toEqual([dummyLambda]);
  });
});
