import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/serverless-app';

describe('test/index.test.ts', () => {

  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createFunctionApp<Framework>();

  afterAll(async () => {
    await close(app);
  });

  it('should get /', async () => {
    // make request
    const result = await createHttpRequest(app).get('/');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello Midwayjs');
    
    const result2 = await createHttpRequest(app).get('/get').query({ name: 123 });
    // or use assert
    expect(result2.status).toBe(200);
    expect(result2.body.name).toBe('123');
  });
});
