import { createWebSocketClient, createBootstrap } from '@midwayjs/mock';
import { sleep } from '@midwayjs/decorator';
import { once } from 'events';
import { join } from 'path';

describe('test/socket/hello.test.ts', () => {
  it('should connect local server', async () => {
    const bootstrap = await createBootstrap(
      join(process.cwd(), 'bootstrap.js')
    );

    const client = await createWebSocketClient(`ws://localhost:7001`);

    client.send(1);
    let gotEvent = once(client, 'message');
    let [data] = await gotEvent;
    expect(JSON.parse(data)).toEqual({
      name: 'harry',
      result: 6,
    });

    client.send(2);
    gotEvent = once(client, 'message');
    [data] = await gotEvent;
    expect(JSON.parse(data)).toEqual({
      name: 'harry',
      result: 7,
    });

    await sleep(1000);
    
    // close client
    await client.close();

    // close app
    await bootstrap.close();
  });
});
