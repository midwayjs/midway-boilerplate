import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
  Body,
} from '@midwayjs/decorator';
import { Context, SCF } from '@midwayjs/faas';

@Provide()
export class HelloTencentService {
  @Inject()
  ctx: Context;

  @ServerlessTrigger(ServerlessTriggerType.API_GATEWAY, {
    path: '/api_gateway_tencent',
    method: 'post',
  })
  async handleAPIGatewayEvent(@Body() name) {
    return `hello ${name}`;
  }

  @ServerlessTrigger(ServerlessTriggerType.TIMER, {
    type: 'cron', // or every
    value: '0 0 4 * * *', // or 1m
  })
  async handleTimerEvent(event: SCF.TimerEvent) {
    this.ctx.logger.info(event);
    return 'hello world';
  }

  @ServerlessTrigger(ServerlessTriggerType.OS, {
    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',
    events: 'cos:ObjectCreated:*',
    filter: {
      prefix: 'filterdir/',
      suffix: '.jpg',
    },
  })
  async handleCOSEvent(event: SCF.COSEvent) {
    this.ctx.logger.info(event);
    return 'hello world';
  }

  @ServerlessTrigger(ServerlessTriggerType.MQ, {
    topic: 'test-topic',
  })
  async handleCMQEvent(event: SCF.CMQEvent) {
    this.ctx.logger.info(event);
    return 'hello world';
  }
}
