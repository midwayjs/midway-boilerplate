const { createFunctionApp, close } = require('@midwayjs/mock');

let app;
async function mochaGlobalSetup() {
  // create app
  app = await createFunctionApp();
}

async function mochaGlobalTeardown() {
  await close(app);
};

function getApp() {
  return app;
}

exports.mochaGlobalSetup = mochaGlobalSetup;
exports.mochaGlobalTeardown = mochaGlobalTeardown;
exports.getApp = getApp;