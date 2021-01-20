'use strict';

const {LightGenerator} = require('light-generator');
const path = require('path');
const fse = require('fs-extra');
const assert = require('assert');
const cp = require('child_process');

describe('/test/index.test.js', () => {

  const targetPath = path.join(__dirname, 'tmp');

  beforeAll(async () => {
    await fse.remove(targetPath);
  });

  afterAll(async () => {
    await fse.remove(targetPath);
  });

  it('should generate boilerplate', async () => {
    const generator = new LightGenerator().defineLocalPath({
      templatePath: path.join(__dirname, '../'),
      targetPath,
    });

    await generator.run();

    const contents = fse.readFileSync(path.join(targetPath, 'src/config/config.default.ts'), 'utf-8');
    assert(!/\{\{/.test(contents));
  });

});
