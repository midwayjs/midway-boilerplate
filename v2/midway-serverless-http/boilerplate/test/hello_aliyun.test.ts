import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/serverless-app';
import { createInitializeContext } from '@midwayjs/serverless-fc-trigger';
import { join } from 'path';

describe('test/hello_aliyun.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<Framework>(join(__dirname, '../'), {
      initContext: createInitializeContext()
    });
  });

  afterAll(async () => {
    await close(app);
  });

  it('should get result from api gateway trigger', async () => {
    const result = await createHttpRequest(app).get('/api_gateway_aliyun').query({
      name: 'zhangting'
    })
    expect(result.text).toEqual('hello zhangting');
  });
});
