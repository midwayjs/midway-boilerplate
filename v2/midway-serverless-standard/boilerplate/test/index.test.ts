import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/serverless-app';
import * as assert from 'assert';

describe('test/index.test.ts', () => {

  it('should get /', async () => {
    // create app
    const app = await createFunctionApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello Midwayjs');
    
    const result2 = await createHttpRequest(app).get('/get').query({ name: 123 });
    // or use assert
    assert.deepStrictEqual(result2.status, 200);
    assert.deepStrictEqual(result2.body.name, '123');

    // close app
    await close(app);
  });
});
