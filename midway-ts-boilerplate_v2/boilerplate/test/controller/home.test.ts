import { createApp, closeApp, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/web';
import * as assert from 'assert';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('Welcome to midwayjs!');

    // or use assert
    assert.deepEqual(result.status, 200);
    assert.deepEqual(result.text, 'Welcome to midwayjs!');

    // close app
    await closeApp(app);
  });

});
