const{ Framework } = require('@midwayjs/grpc');
const { join } = require('path');

const grpcService = new Framework().configure({
  services: [
    {
      protoPath: join(__dirname, 'proto/helloworld.proto'),
      package: 'helloworld',
    },
  ],
});

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(grpcService).run();
