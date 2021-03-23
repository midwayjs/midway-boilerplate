import { createApp, close } from '@midwayjs/mock';
import { Framework } from '@midwayjs/socketio';
import * as socketClient from 'socket.io-client';

describe('test/socket/hello.test.ts', () => {

  it('should connect local server', async () => {
    // create app
    const app = await createApp<Framework>(process.cwd(), {
      port: 3000
    });

    const socket = socketClient('http://127.0.0.1:3000');

    await new Promise<void>(resolve =>  {
      socket.on('connect', () => {
        console.log(socket.id);
        resolve();
      });
    });
    // close app
    await close(app);
  });

});
