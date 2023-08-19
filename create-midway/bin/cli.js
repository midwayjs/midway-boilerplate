'use strict';
const { CommandCore } = require('@midwayjs/command-core');
const { AddPlugin } = require('@midwayjs/cli-plugin-add');
const cli = async argv => {
  const core = new CommandCore({
    commands: ['new', ...argv._],
    options: argv || {},
    log: {
      log: console.log,
    },
    cwd: process.cwd(),
  });
  core.addPlugin(AddPlugin);
  await core.ready();
  await core.invoke();
};

module.exports = {
  cli,
};
