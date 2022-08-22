import { Catch } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { WeatherEmptyDataError } from '../error/weather.error';

@Catch(WeatherEmptyDataError)
export class WeatherErrorFilter {
  async catch(err: WeatherEmptyDataError, ctx: Context) {
    ctx.logger.error(err);
    return '<html><body><h1>weather data is empty</h1></body></html>';
  }
}
