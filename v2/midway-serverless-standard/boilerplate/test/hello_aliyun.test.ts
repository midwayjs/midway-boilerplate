import { createFunctionApp, close } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/serverless-app';
import { HelloAliyunService } from '../src/function/hello_aliyun';
import { join } from 'path';

describe('test/hello_aliyun.test.ts', () => {

  let app: Application;
  let instance: HelloAliyunService;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<Framework>(join(__dirname, '../'), {
      initContext: {
        a: 1
      }
    });
    instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);
  });

  afterAll(async () => {
    await close(app);
  });

  it('should get result from event trigger', async () => {
    expect(await instance.handleEvent('hello world')).toEqual('hello world');
  });

  it('should get result from timer trigger', async () => {
    expect(await instance.handleTimerEvent()).toEqual('hello world');
  });
  it('should get result from event trigger', async () => {
    expect(await instance.handleEvent('hello world')).toEqual('hello world');
  });
});
