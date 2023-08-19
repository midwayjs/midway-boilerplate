import { App, Configuration, ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as egg from '@midwayjs/web';

@Configuration({
  imports: [egg],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
