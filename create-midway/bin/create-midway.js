#!/usr/bin/env node
'use strict';
const minimist = require('minimist');
const argv = minimist(process.argv.slice(2));
if (process.env.FAAS_CLI_VERBOSE || argv.V) {
  console.log(argv);
}
if (argv._[0] === 'init') {
  argv._ = argv._.slice(1);
}
if (argv._[0] === 'midway') {
  argv._ = argv._.slice(1);
}
const { cli } = require('./cli');
cli(argv).catch(err => {
  console.error(err);
})
