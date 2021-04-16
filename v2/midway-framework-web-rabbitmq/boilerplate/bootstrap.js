const WebFramework = require('@midwayjs/web').Framework;
const RabbitMQFramework = require('@midwayjs/rabbitmq').Framework;

// main framework
const webFramework = new WebFramework().configure({
  port: 7001,
});

const rabbitMQFramework = new RabbitMQFramework().configure({
  url: 'amqp://localhost:5672',
});

const { Bootstrap } = require('@midwayjs/bootstrap');
// load and run
Bootstrap.load(webFramework).load(rabbitMQFramework).run();
