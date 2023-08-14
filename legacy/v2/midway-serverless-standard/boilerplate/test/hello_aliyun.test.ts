import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/serverless-app';
import { HelloAliyunService } from '../src/function/hello_aliyun';
import { createTimerEvent, createOSSEvent, createInitializeContext } from '@midwayjs/serverless-fc-trigger';
import { join } from 'path';

describe('test/hello_aliyun.test.ts', () => {

  let app: Application;
  let instance: HelloAliyunService;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<Framework>(join(__dirname, '../'), {
      initContext: createInitializeContext()
    });
    instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);
  });

  afterAll(async () => {
    await close(app);
  });

  it('should get result from api gateway trigger', async () => {
    const result = await createHttpRequest(app).post('/api_gateway_aliyun').send({
      name: 'zhangting'
    })
    expect(result.text).toEqual('hello zhangting');
  });

  it('should get result from event trigger', async () => {
    expect(await instance.handleEvent('hello world')).toEqual('hello world');
  });

  it('should get result from timer trigger', async () => {
    expect(await instance.handleTimerEvent(createTimerEvent())).toEqual('hello world');
  });
  it('should get result from oss trigger', async () => {
    expect(await instance.handleOSSEvent(createOSSEvent())).toEqual('hello world');
  });
});
