const fse = require('fs-extra');
const { join } = require('path');

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

module.exports = async options => {
  const currentFilePath = join(options.targetRoot, 'src/config/config.default.ts');
  const contents = fse
    .readFileSync(currentFilePath, 'utf-8')
    .replace('{{keys}}', Date.now() + '_' + random(100, 10000));

  await fse.writeFile(currentFilePath, contents);
};