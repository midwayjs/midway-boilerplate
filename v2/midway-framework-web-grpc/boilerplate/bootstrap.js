const WebFramework = require('@midwayjs/web').Framework;
const GRPCFramework = require('@midwayjs/grpc').Framework;
const { join } = require('path');

// main framework
const web = new WebFramework().configure({
  port: 7001,
});

const grpc = new GRPCFramework().configure({
  services: [
    {
      protoPath: join(__dirname, 'proto/helloworld.proto'),
      package: 'helloworld',
    },
  ],
});

const { Bootstrap } = require('@midwayjs/bootstrap');
// load and run
Bootstrap.load(web).load(grpc).run();
