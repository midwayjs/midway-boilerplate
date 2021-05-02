const { LightGenerator } = require('light-generator');

module.exports = async options => {
  const generator = new LightGenerator().defineNpmPackage({
    npmPackage: '@midwayjs-examples/application-web',
    targetPath: options.targetRoot,
  });
  
  await generator.run();
};