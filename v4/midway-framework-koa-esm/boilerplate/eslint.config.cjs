const mwtsConfig = require('mwts/eslint.config.js');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'test', 'typings'],
  },
  ...mwtsConfig,
  {
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
];
