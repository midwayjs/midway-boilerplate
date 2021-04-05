import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType, Query } from '@midwayjs/decorator';
import { Context, SCF } from '@midwayjs/faas';

@Provide()
export class HelloTencentService {

  @Inject()
  ctx: Context;

  @ServerlessTrigger(ServerlessTriggerType.API_GATEWAY, {
    path: '/api_gateway',
    method: 'post'
  })
  async handleAPIGatewayEvent(@Query() name) {
    
  }

  @ServerlessTrigger(ServerlessTriggerType.TIMER, {
    type: 'cron',           // or every
    value: '0 0 4 * * *'    // or 1m
  })
  async handleTimerEvent(event: SCF.TimerEvent) {
    
  }

  @ServerlessTrigger(ServerlessTriggerType.OS, {
    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',
    events: 'cos:ObjectCreated:*',
    filter: {
      prefix: 'filterdir/',
      suffix: '.jpg'
    }
  })
  async handleCOSEvent(event: SCF.COSEvent) {
    
  }

  @ServerlessTrigger(ServerlessTriggerType.MQ, {
    topic: 'test-topic'
  })
  async handleCMQEvent(event: SCF.CMQEvent) {
    
  }


}