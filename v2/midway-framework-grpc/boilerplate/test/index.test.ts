import { createApp, close } from '@midwayjs/mock';
import { Framework, createGRPCConsumer } from '@midwayjs/grpc';
import { join } from 'path';

describe('test/index.test.ts', () => {

  it('should create multiple grpc service in one server', async () => {
    const baseDir = join(__dirname, '../');
    const app = await createApp<Framework>(baseDir, {
      services: [
        {
          protoPath: join(baseDir, 'proto', 'hero.proto'),
          package: 'hero',
        },
        {
          protoPath: join(baseDir, 'proto', 'helloworld.proto'),
          package: 'helloworld',
        }
      ]
    });

    const service: any = await createGRPCConsumer({
      package: 'hero',
      protoPath: join(baseDir, 'proto', 'hero.proto'),
    });

    const result = await service.findOne({
      id: 123
    });

    expect(result).toEqual({ id: 1, name: 'bbbb-Hello harry' })
    await close(app);
  });

});
