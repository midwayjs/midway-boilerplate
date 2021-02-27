import { App, Configuration } from '@midwayjs/decorator';
import { Application } from '@midwayjs/express';

@Configuration()
export class ContainerLifeCycle {

  @App()
  app: Application;

  async onReady() {
    // this.app.use(function (req, res, next) {
    //   console.log('url:', req.url);
    //   next();
    // });
  }
}
