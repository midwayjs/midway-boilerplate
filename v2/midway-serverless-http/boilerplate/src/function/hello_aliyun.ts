import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
  Query,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';

@Provide()
export class HelloAliyunService {
  @Inject()
  ctx: Context;

  @ServerlessTrigger(ServerlessTriggerType.HTTP, {
    path: '/api_gateway_aliyun',
    method: 'get',
  })
  async handleHTTPEvent(@Query() name) {
    return `hello ${name}`;
  }

}
