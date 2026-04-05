import { Controller, Get, Inject, Query } from '@midwayjs/core';
import type { Context } from '@midwayjs/koa';
import { WeatherService } from '../service/weather.service';

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
