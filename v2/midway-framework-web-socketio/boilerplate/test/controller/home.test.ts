import { MidwayFrameworkType } from '@midwayjs/decorator';
import { createHttpRequest, createBootstrap } from '@midwayjs/mock';
import { Application } from 'egg';
import { join } from 'path';
import * as assert from 'assert';

xdescribe('test/controller/home.test.ts', () => {
  let bootstrap;
  let app: Application;

  beforeAll(async () => {
    // create bootstrap
    bootstrap = await createBootstrap(join(process.cwd(), 'bootstrap.js'));
    app = bootstrap.getApp(MidwayFrameworkType.WEB);
  });

  afterAll(async () => {
    await bootstrap.close();
  });

  it('should GET /', async () => {
    // make request
    const result = await createHttpRequest(app).get('/');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello Midwayjs!');

    // or use assert
    assert.deepStrictEqual(result.status, 200);
    assert.deepStrictEqual(result.text, 'Hello Midwayjs!');
  });
});
