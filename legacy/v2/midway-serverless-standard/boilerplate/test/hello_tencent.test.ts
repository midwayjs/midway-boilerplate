import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/serverless-app';
import { HelloTencentService } from '../src/function/hello_tencent';
import { createTimerEvent, createCOSEvent, createCMQEvent } from '@midwayjs/serverless-scf-trigger';

describe('test/hello_tencent.test.ts', () => {

  let app: Application;
  let instance: HelloTencentService;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<Framework>();
    instance = await app.getServerlessInstance<HelloTencentService>(HelloTencentService);
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

  it('should get result from timer trigger', async () => {
    expect(await instance.handleTimerEvent(createTimerEvent())).toEqual('hello world');
  });
  it('should get result from oss trigger', async () => {
    expect(await instance.handleCOSEvent(createCOSEvent())).toEqual('hello world');
  });
  it('should get result from cmq trigger', async () => {
    expect(await instance.handleCMQEvent(createCMQEvent())).toEqual('hello world');
  });
});
