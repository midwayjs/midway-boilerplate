import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';
import * as nock from 'nock';

describe('test/controller/weather.test.ts', () => {
  let app: Application;
  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
    // 这里由于 github 测试环境无法顺畅的连通国内网络，使用 nock 这个库模拟了服务，实际测试不需要
    nock('http://www.weather.com.cn')
      .get('/data/sk/101010100.html')
      .reply(200, {
        weatherinfo: {
          city: '北京',
          cityid: '101010100',
          temp: '27.9',
          WD: '南风',
          WS: '小于3级',
          SD: '28%',
          AP: '1002hPa',
          njd: '暂无实况',
          WSE: '<3',
          time: '17:55',
          sm: '2.1',
          isRadar: '1',
          Radar: 'JC_RADAR_AZ9010_JB',
        },
      });
  });

  afterAll(async () => {
    // close app
    await close(app);
    nock.restore();
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
