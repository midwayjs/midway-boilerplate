import { Configuration, ILifeCycle } from '@midwayjs/core';
import * as faas from '@midwayjs/faas';
import DefaultConfig from './config/config.default.js';
import ProdConfig from './config/config.prod.js';

@Configuration({
  imports: [faas],
  importConfigs: [
    {
      default: DefaultConfig,
      prod: ProdConfig,
    },
  ],
  conflictCheck: true,
})
export class MainConfiguration implements ILifeCycle {
  async onReady() {}
}
