const RabbitMQFramework = require('@midwayjs/rabbitmq').Framework;
const rabbitMQFramework = new RabbitMQFramework().configure({
  url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
});

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(rabbitMQFramework).run();
