import { createBootstrap } from '@midwayjs/mock';
import { createGRPCConsumer } from '@midwayjs/grpc';
import { join } from 'path';
import { helloworld } from '../src/domain/helloworld';

describe('test/grpc/greeter.test.ts', () => {

  let bootstrap;

  beforeAll(async () => {
    // create bootstrap
    bootstrap = await createBootstrap(join(process.cwd(), 'bootstrap.js'));
  });

  afterAll(async () => {
    await bootstrap.close({
      sleep: 1000,
    });
  });

  it('should create multiple grpc service in one server', async () => {
    const service = await createGRPCConsumer<helloworld.GreeterClient>({
      package: 'helloworld',
      protoPath: join(__dirname, '../../', 'proto', 'helloworld.proto'),
      url: 'localhost:6565'
    });

    const result = await service.sayHello().sendMessage({
      name: 'harry'
    });

    expect(result.message).toEqual('Hello harry');
  });

});
