import { createRabbitMQProducer, createBootstrap } from '@midwayjs/mock';
import { join } from 'path';

describe('test/consumer/userConsumer.test.ts', () => {
  it('should test  local server', async () => {
    // create a mock queue and channel
    const channel = await createRabbitMQProducer('tasks', { 
      mock: false, 
      url: process.env.RABBITMQ_URL || 'amqp://localhost:5672' 
    });
    // send data to queue
    channel.sendToQueue('tasks', Buffer.from('something to do'))

    // create all framework
    const bootstrap = await createBootstrap(
      join(process.cwd(), 'bootstrap.js')
    );

    // close app
    await bootstrap.close();
    // close channel
    await channel.close();
  });
});
