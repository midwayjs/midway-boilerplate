import { invoke } from '@midwayjs/serverless-invoke';
import * as assert from 'assert';
import { join } from 'path';

describe('/test/index.test.ts', () => {
  it('invoke', async () => {
    const result: any = await invoke({
      functionName: 'index',
      functionDir: join(__dirname, '../')
    });
    assert(/hello world/.test(JSON.stringify(result)));
  });
});
