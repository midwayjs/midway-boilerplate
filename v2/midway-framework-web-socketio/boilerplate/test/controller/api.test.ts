import { MidwayFrameworkType } from '@midwayjs/decorator';
import { createHttpRequest, createBootstrap } from '@midwayjs/mock';
import { Application } from 'egg';
import { join } from 'path';

xdescribe('test/controller/api.test.ts', () => {
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

  it('should POST /api/get_user', async () => {
    // make request
    const result = await createHttpRequest(app)
      .post('/api/get_user')
      .query({ uid: 123 });

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe('OK');
  });
});
