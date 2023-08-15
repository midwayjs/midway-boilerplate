import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Application, Framework } from '@midwayjs/faas';

describe('test/index.test.ts', () => {

  let app: Application;

  before(async () => {
    // create app
    app = await createFunctionApp<Framework>();
  });

  after(async () => {
    await close(app);
  });

  it('should get result from http trigger', async () => {
    const result = await createHttpRequest(app).get('/').query({
      name: 'Midway.js'
    })
    expect(result.text).toEqual('Hello Midway.js');
  });
});
