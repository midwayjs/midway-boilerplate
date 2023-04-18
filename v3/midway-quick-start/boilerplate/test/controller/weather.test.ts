import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('test/controller/weather.test.ts', () => {
  let app: Application;
  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    // close app
    await close(app);
  });

  it('should test /weather with success request', async () => {
    // make request
    const result = await createHttpRequest(app)
      .get('/weather')
      .query({ cityId: 101010100 });

    expect(result.status).toBe(200);
    expect(result.text).toMatch(/北京/);
  });

  it('should test /weather with fail request', async () => {
    const result = await createHttpRequest(app).get('/weather');

    expect(result.status).toBe(200);
    expect(result.text).toMatch(/weather data is empty/);
  });
});
