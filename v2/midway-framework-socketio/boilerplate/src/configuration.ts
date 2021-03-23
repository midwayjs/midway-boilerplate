import { Configuration, App } from '@midwayjs/decorator';
import { Application } from '@midwayjs/socketio';

@Configuration()
export class ContainerLifeCycle {
  @App()
  app: Application;

  async onReady() {
    this.app.on('connection', (socket) => {
      console.log(socket.id);
    });
  }
}
