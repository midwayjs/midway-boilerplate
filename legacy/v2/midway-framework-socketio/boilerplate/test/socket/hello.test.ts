import { createApp, close, createSocketIOClient } from '@midwayjs/mock';
import { Framework } from '@midwayjs/socketio';
import { SocketRequestEvent, SocketResponseEvent } from '../../src/interface';

describe('test/socket/hello.test.ts', () => {

  it('should connect local server', async () => {
    // create app
    const app = await createApp<Framework>(process.cwd(), {
      port: 3000
    });

    const client = await createSocketIOClient({
      port: 3000,
    });

    const data = await new Promise(resolve => {
      client.on(SocketResponseEvent.GREET, resolve);
      // 发送事件
      client.send(SocketRequestEvent.GREET, 1, 2, 3);
    });
    
    expect(data).toEqual({
      name: 'harry',
      result: 6,
    });

    // close client
    await client.close();

    // close app
    await close(app);
  });

});
