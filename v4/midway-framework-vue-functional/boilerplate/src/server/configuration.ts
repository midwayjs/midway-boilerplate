import { ESModuleFileDetector } from '@midwayjs/core';
import { defineConfiguration } from '@midwayjs/core/functional';
import * as koa from '@midwayjs/koa';

export default defineConfiguration({
  imports: [koa],
  importConfigs: [
    {
      default: {
        keys: 'midway-vue-functional-key',
        koa: {
          globalPrefix: '/api',
          port: 7001,
        },
      },
      local: {
        koa: {
          port: null,
        },
      },
    },
  ],
  detector: new ESModuleFileDetector(),
});
