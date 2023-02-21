import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    testPathIgnorePatterns: ['dist'],
    preset: '@shelf/jest-mongodb',
  };
};
