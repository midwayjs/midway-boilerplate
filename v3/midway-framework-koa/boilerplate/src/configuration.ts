import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as bodyParser from 'koa-bodyparser';
import { join } from 'path';

@Configuration({
  imports: [koa],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    // bodyparser options see https://github.com/koajs/bodyparser
    this.app.useMiddleware(bodyParser());
  }
}
