import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';
import assert from 'assert';

describe('test/controller/home.test.ts', () => {

  it('should POST /api/get_user', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/api/get_user').query({ uid: 123 });

    // use expect by jest
    assert(result.status ===200);
    assert(result.body.message === 'OK');

    // close app
    await close(app);
  });
});
