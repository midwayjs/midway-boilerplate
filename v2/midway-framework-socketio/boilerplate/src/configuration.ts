import { Configuration, App } from '@midwayjs/decorator';
import { Application } from '@midwayjs/socketio';
import { ILifeCycle } from '@midwayjs/core';

@Configuration()
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {
    this.app.on('connection', socket => {
      console.log(socket.id);
    });
  }
}
