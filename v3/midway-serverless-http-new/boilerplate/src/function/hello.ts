import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
  Query,
} from '@midwayjs/core';
import { Context } from '@midwayjs/faas';

@Provide()
export class HelloHTTPService {
  @Inject()
  ctx: Context;

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    functionName: 'hello',
    name: 'http',
    path: '/',
    method: 'get',
  })
  async handleHTTPEvent(@Query('name') name = 'midwayjs') {
    return `Hello ${name}`;
  }
}
