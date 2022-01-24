import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import * as ServerlessApp from '@midwayjs/serverless-app';

describe('test/hello_aliyun.test.ts', () => {

  let app: ServerlessApp.Application;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<ServerlessApp.Framework>(process.cwd(), {}, ServerlessApp);
  });

  afterAll(async () => {
    await close(app);
  });

  it('should get result from api gateway trigger', async () => {
    const result = await createHttpRequest(app).get('/').query({
      name: 'Midway.js'
    })
    expect(result.text).toEqual('Hello Midway.js');
  });
});
