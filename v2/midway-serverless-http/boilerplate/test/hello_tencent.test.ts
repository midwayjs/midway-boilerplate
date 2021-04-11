import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/serverless-app';

describe('test/hello_tencent.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  it('should get result from api gateway trigger', async () => {
    const result = await createHttpRequest(app).post('/api_gateway_tencent').send({
      name: 'zhangting'
    })
    expect(result.text).toEqual('hello zhangting');
  });
});
