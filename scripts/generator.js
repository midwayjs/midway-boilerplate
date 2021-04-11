const { LightGenerator } = require('light-generator');

const localGenerator = new LightGenerator().defineLocalPath({
  templatePath: process.argv[3],
  targetPath: process.argv[2],
});

localGenerator.run().then(() => {
  console.log(`create ${process.argv[3]} success`);
}).catch(err => {
  console.error(err, 'create fail');
})