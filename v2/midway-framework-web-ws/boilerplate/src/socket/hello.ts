import {
  Inject,
  OnWSConnection,
  OnWSDisConnection,
  OnWSMessage,
  Provide,
  WSController,
} from '@midwayjs/decorator';
import { UserService } from '../service/user';
import { Context } from '@midwayjs/ws';

@Provide()
@WSController()
export class HelloSocketService {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @OnWSConnection()
  init() {
    console.log(`namespace / got a connection ${this.ctx.readyState}`);
  }

  @OnWSMessage('message')
  async gotMyMessage(data) {
    return { name: 'harry', result: parseInt(data) + 5 };
  }

  @OnWSDisConnection()
  disconnect(id: number) {
    console.log('disconnect ' + id);
  }
}
