import { Configuration, App } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { IMidwayKoaApplication } from '@midwayjs/koa';

@Configuration()
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: IMidwayKoaApplication;

  async onReady() {
    this.app.use(async (ctx, next) => {
      console.log(`url: ${ctx.path}`);
      await next();
    });
  }
}
