import { Configuration, App } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
// import { DefaultErrorFilter } from './filter/default.filter.js';
// import { NotFoundFilter } from './filter/notfound.filter.js';
import { ReportMiddleware } from './middleware/report.middleware.js';
import DefulatConfig from './config/config.default.js';
import UnittestConfig from './config/config.unittest.js';

@Configuration({
  imports: [
    koa,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [
    {
      default: DefulatConfig,
      unittest: UnittestConfig,
    },
  ],
})
export class MainConfiguration {
  @App()
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
