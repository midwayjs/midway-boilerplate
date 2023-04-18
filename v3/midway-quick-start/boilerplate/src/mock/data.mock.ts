import {
  Mock,
  ISimulation,
  App,
  Inject,
  IMidwayApplication,
  MidwayMockService,
} from '@midwayjs/core';
import { WeatherService } from '../service/weather.service';

@Mock()
export class WeatherDataMock implements ISimulation {
  @App()
  app: IMidwayApplication;

  @Inject()
  mockService: MidwayMockService;

  async setup(): Promise<void> {
    const originMethod = WeatherService.prototype.getWeather;
    this.mockService.mockClassProperty(
      WeatherService,
      'getWeather',
      async cityId => {
        if (cityId === '101010100') {
          return {
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
          };
        } else {
          return originMethod.apply(this, [cityId]);
        }
      }
    );
  }

  enableCondition(): boolean | Promise<boolean> {
    // 模拟类启用的条件
    return ['local', 'test', 'unittest'].includes(this.app.getEnv());
  }
}
