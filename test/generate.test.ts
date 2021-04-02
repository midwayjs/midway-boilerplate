import { join } from 'path';
import { createTemplate } from './util';

describe('/test/generate.test.ts', function () {

  it('should test create v2 socket.io', async () => {
    const targetPath = await createTemplate(join());
    console.log(targetPath);
  });
});
