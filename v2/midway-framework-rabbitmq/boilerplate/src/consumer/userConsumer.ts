import {
  Provide,
  Consumer,
  MSListenerType,
  RabbitMQListener,
  Inject,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/rabbitmq';
import { ConsumeMessage } from 'amqplib';

@Provide()
@Consumer(MSListenerType.RABBITMQ)
export class UserConsumer {
  @Inject()
  ctx: Context;

  @RabbitMQListener('demo')
  async gotData(msg: ConsumeMessage) {
    console.log('=======');
    console.log(msg.content.toString());
    this.ctx.channel.ack(msg);
  }
}
