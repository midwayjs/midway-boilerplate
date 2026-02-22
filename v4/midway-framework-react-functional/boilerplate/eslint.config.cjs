const mwtsConfig = require('mwts/eslint.config.js');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'test', 'typings'],
  },
  ...mwtsConfig,
];
