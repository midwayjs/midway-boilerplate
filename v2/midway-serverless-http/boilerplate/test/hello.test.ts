import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/serverless-app';

describe('test/hello_aliyun.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  it('should get result from api gateway trigger', async () => {
    const result = await createHttpRequest(app).get('/').query({
      name: 'zhangting'
    })
    expect(result.text).toEqual('Hello zhangting');
  });
});
