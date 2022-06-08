/* eslint-disable @typescript-eslint/no-var-requires */
import { describe, it, expect, afterEach, vi } from 'vitest';
import { getEc2s } from '../../../src/infra/functions/lib/ec2s';

vi.mock('../../../src/infra/functions/lib/ec2s', () => {
  const dummyEc2 = require('./ec2.json');
  return {
    getLambdas: vi.fn().mockResolvedValue([dummyEc2]),
  };
});

describe('api/src/ec2s', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should get all Ec2s', async () => {
    const ec2s = await getEc2s();
    const dummyEc2 = require('./ec2.json');
    expect(ec2s).toEqual(dummyEc2);
  });
});
