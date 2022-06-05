import { describe, it, expect, afterEach, vi } from 'vitest';
import { getLambdas } from '../../src/api/src/lambdas';

vi.mock('../../api/src/lambdas', () => {
  const dummyLambda = require('./lambda.json');
  return {
    getLambdas: vi.fn().mockResolvedValue(dummyLambda),
  };
});

describe('api/src/lambdas', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should get all Lambdas', async () => {
    const lambdas = await getLambdas();
    const dummyLambda = require('./lambda.json');
    expect(lambdas).toEqual(dummyLambda);
  });
});
