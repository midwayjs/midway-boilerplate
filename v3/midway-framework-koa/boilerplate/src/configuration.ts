import { Configuration, App } from '@midwayjs/decorator';
import * as Koa from '@midwayjs/koa';
import * as bodyParser from 'koa-bodyparser';
import { join } from 'path';

@Configuration({
  imports: [Koa],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: Koa.Application;

  async onReady() {
    // bodyparser options see https://github.com/koajs/bodyparser
    this.app.useMiddleware(bodyParser());
  }
}
