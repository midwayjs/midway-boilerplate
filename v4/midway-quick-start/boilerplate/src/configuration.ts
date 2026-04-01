import { Configuration, App, CommonJSFileDetector } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as info from '@midwayjs/info';
import { join } from 'path';
import { ReportMiddleware } from './middleware/report.middleware';
import * as view from '@midwayjs/view-nunjucks';
import * as staticFile from '@midwayjs/static-file';
import { WeatherErrorFilter } from './filter/weather.filter';

@Configuration({
  imports: [
    koa,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    view,
    staticFile,
  ],
  importConfigs: [join(__dirname, './config')],
  detector: new CommonJSFileDetector(),
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    this.app.useFilter([WeatherErrorFilter]);
  }
}
