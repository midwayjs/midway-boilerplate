import { createApp, close } from '@midwayjs/mock';

let app;
export async function mochaGlobalSetup() {
  // create app
  app = await createApp();
}

export async function mochaGlobalTeardown() {
  await close(app);
};

export function getApp() {
  return app;
}