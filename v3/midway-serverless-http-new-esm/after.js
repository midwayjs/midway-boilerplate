const fse = require('fs').promises;
const { join } = require('path');

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

module.exports = async options => {
  const currentFilePath = join(options.targetRoot, 'src/config/config.default.ts');
  let contents = await fse.readFile(currentFilePath, 'utf-8');
  contents = contents.replace('{{keys}}', Date.now() + '_' + random(100, 10000));

  await fse.writeFile(currentFilePath, contents);
};