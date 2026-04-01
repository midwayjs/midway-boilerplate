const mwtsConfig = require('mwts/eslint.config.js');

module.exports = [
  {
    ignores: [
      'node_modules',
      'dist',
      'test',
      'jest.config.js',
      'typings',
      'index.d.ts',
    ],
  },
  ...mwtsConfig,
  {
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
];
