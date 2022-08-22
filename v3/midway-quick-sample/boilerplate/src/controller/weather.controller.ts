import { Controller, Get, Inject, Query } from '@midwayjs/decorator';
import { WeatherService } from '../service/weather.service';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class WeatherController {

  @Inject()
  weatherService: WeatherService;

  @Inject()
  ctx: Context;

  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<void> {
    const result = await this.weatherService.getWeather(cityId);
    if (result) {
      await this.ctx.render('info', result.weatherinfo);
    }
  }
}
