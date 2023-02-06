import { Provide, makeHttpRequest } from '@midwayjs/core';
import { WeatherInfo } from '../interface';
import { WeatherEmptyDataError } from '../error/weather.error';

@Provide()
export class WeatherService {
  async getWeather(cityId: string): Promise<WeatherInfo> {
    if (!cityId) {
      throw new WeatherEmptyDataError();
    }

    try {
      const result = await makeHttpRequest(
        `http://www.weather.com.cn/data/sk/${cityId}.html`,
        {
          dataType: 'json',
        }
      );
      if (result.status === 200) {
        return result.data;
      }
    } catch (error) {
      throw new WeatherEmptyDataError(error);
    }
  }
}
