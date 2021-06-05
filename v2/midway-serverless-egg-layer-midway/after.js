const fse = require('fs-extra');
const path = require('path');

module.exports = async options => {
  const pkg = require(path.join(options.targetRoot, 'package.json'));
  pkg['scripts']['deploy'] = "midway-bin deploy";
  await fse.writeFile(path.join(options.targetRoot, 'package.json'), JSON.stringify(pkg, null, 2));
};