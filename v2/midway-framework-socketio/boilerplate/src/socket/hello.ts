import { WSController, OnMessage, Provide, OnConnection, Inject } from '@midwayjs/decorator';
import { SocketRequestEvent } from '../interface';
import { Context } from '@midwayjs/socketio';

@Provide()
@WSController('/')
export class HelloSocketController {

  @Inject()
  ctx: Context;

  @OnConnection()
  async onConnectionMethod() {
    console.log('on client connect', this.ctx.id);
  }

  @OnMessage(SocketRequestEvent.GREET)
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
