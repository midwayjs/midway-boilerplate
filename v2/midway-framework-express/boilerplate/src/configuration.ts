import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { IMidwayExpressApplication } from '@midwayjs/express';

@Configuration()
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: IMidwayExpressApplication;

  async onReady() {
    // this.app.use(function (req, res, next) {
    //   console.log('url:', req.url);
    //   next();
    // });
  }
}
