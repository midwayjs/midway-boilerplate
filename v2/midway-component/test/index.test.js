'use strict';

const {LightGenerator} = require('light-generator');
const path = require('path');
const fse = require('fs-extra');
const assert = require('assert');

describe('/test/index.test.js', () => {

  const targetPath = path.join(__dirname, 'tmp');

  beforeEach(async () => {
    await fse.remove(targetPath);
  });

  afterEach(async () => {
    await fse.remove(targetPath);
  });

  it.only('should generate boilerplate', async () => {
    const generator = new LightGenerator().defineLocalPath({
      templatePath: path.join(__dirname, '../'),
      targetPath,
    });

    await generator.run();

  });
});
