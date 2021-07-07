import { createRabbitMQProducer, createBootstrap } from '@midwayjs/mock';
import { sleep } from '@midwayjs/decorator';
import { join } from 'path';

describe('test/consumer/userConsumer.test.ts', () => {
  it('should test local server', async () => {
    // create a mock queue and channel
    const manager = await createRabbitMQProducer({
      url: process.env.RABBITMQ_URL || 'amqp://localhost'
    });
    const channel = await manager.createConfirmChannel('tasks');
    // send data to queue
    channel.sendToQueue('tasks', Buffer.from('something to do'));

    // create all framework
    const bootstrap = await createBootstrap(
      join(process.cwd(), 'bootstrap.js')
    );
    // will be close app wait a moment(after ack)
    await sleep();
    // close channel
    await channel.close();
    // close app
    await bootstrap.close();
  });
});
