import { createApp, close } from '@midwayjs/mock';

export async function mochaGlobalSetup() {
  // create app
  global['app'] = await createApp();
}

export async function mochaGlobalTeardown() {
  await close(global['app']);
};