import {
  Provide,
  Inject,
  ServerlessTrigger,
  ServerlessTriggerType,
  Query,
} from '@midwayjs/decorator';
import { Context, FC } from '@midwayjs/faas';

@Provide()
export class HelloAliyunService {
  @Inject()
  ctx: Context;

  @ServerlessTrigger(ServerlessTriggerType.EVENT)
  async handleEvent(event: any) {
    return event;
  }

  @ServerlessTrigger(ServerlessTriggerType.API_GATEWAY, {
    path: '/api_gateway_aliyun',
    method: 'post',
  })
  async handleAPIGatewayEvent(@Query() name) {
    return `hello ${name}`;
  }

  @ServerlessTrigger(ServerlessTriggerType.TIMER, {
    type: 'cron', // or every
    value: '0 0 4 * * *', // or 1m
  })
  async handleTimerEvent(event: FC.TimerEvent) {
    this.ctx.logger.info(event);
    return 'hello world';
  }

  @ServerlessTrigger(ServerlessTriggerType.OS, {
    bucket: 'ossBucketName',
    events: ['oss:ObjectCreated:*', 'oss:ObjectRemoved:DeleteObject'],
    filter: {
      prefix: 'filterdir/',
      suffix: '.jpg',
    },
  })
  async handleOSSEvent(event: FC.OSSEvent) {
    this.ctx.logger.info(event);
    return 'hello world';
  }

}
