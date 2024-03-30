import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Indicates the root directory of your project
  rootDir: './',

  // An array of file extensions your tests use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The pattern Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.spec.ts'],

  // Transform files with TypeScript using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // A list of paths to directories that Jest should use to search for test files
  roots: ['<rootDir>'],

  // A preset TypeScript configuration
  preset: 'ts-jest/presets/default',

  // Additional options for ts-jest
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};

export default config;
