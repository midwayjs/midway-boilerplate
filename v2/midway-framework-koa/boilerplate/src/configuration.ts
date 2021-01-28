import { Configuration, App } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';

@Configuration()
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {
    this.app.use(async (ctx, next) => {
      console.log(`url: ${ctx.path}`);
      await next();
    });
  }
}
