module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/test',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/test/'],
};
