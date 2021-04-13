import { createSocketIOClient, createBootstrap } from '@midwayjs/mock';
import { SocketRequestEvent, SocketResponseEvent } from '../../src/interface';
import { join } from 'path';

describe('test/socket/hello.test.ts', () => {
  it('should connect local server', async () => {
    const bootstrap = await createBootstrap(
      join(process.cwd(), 'bootstrap.js')
    );

    const client = await createSocketIOClient({
      port: 7001,
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
    await bootstrap.close();
  });
});
