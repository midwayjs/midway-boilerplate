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

  it('should generate boilerplate', async () => {
    const generator = new LightGenerator().defineLocalPath({
      templatePath: path.join(__dirname, '../'),
      targetPath,
    });

    await generator.run({
      name: 'demo-test',
      description: '',
      author: 'harry',
      keys: '123'
    });

    let contents = fse.readFileSync(path.join(targetPath, 'README.md'), 'utf-8');
    assert(/demo-test/.test(contents));

    contents = fse.readFileSync(path.join(targetPath, 'src/config/config.default.ts'), 'utf-8');
    assert(!/\{\{/.test(contents));
  });
});
