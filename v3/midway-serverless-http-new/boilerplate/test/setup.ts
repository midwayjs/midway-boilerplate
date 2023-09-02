import { createFunctionApp, close } from '@midwayjs/mock';

let app;
export async function mochaGlobalSetup() {
  // create app
  app = await createFunctionApp();
}

export async function mochaGlobalTeardown() {
  await close(app);
};

export function getApp() {
  return app;
}
