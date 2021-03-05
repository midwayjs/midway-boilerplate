import { Inject, Provide, Controller, Get, Post } from '@midwayjs/decorator';
import { FaaSContext } from '@midwayjs/faas';

@Provide()
@Controller('/')
export class APIService {

  @Inject()
  ctx: FaaSContext;

  @Get('/')
  async hello() {
    console.log('xxxx');
    return 'Hello Midwayjs';
  }

  @Get('/get')
  async get() {
    return this.ctx.query;
  }

  @Post('/post')
  async post() {
    return this.ctx.method;
  }
}