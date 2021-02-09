const { join } = require('path');
const { Framework } = require('@midwayjs/grpc');
const grpcService = new Framework().configure({
  services: [
    {
      protoPath: join(__dirname, 'proto/hero.proto'),
      package: 'hero',
    },
    {
      protoPath: join(__dirname, 'proto/helloworld.proto'),
      package: 'helloworld',
    },
  ],
});

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(grpcService).run();
