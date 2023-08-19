import { Configuration, App } from '@midwayjs/core';
import * as express from '@midwayjs/express';
import { join } from 'path';

@Configuration({
  imports: [express],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App()
  app: express.Application;

  async onReady() {}
}
