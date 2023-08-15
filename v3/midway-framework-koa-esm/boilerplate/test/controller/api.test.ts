import { createHttpRequest } from '@midwayjs/mock';
import assert from 'assert';

describe('test/controller/home.test.ts', () => {

  it('should POST /api/get_user', async () => {
    // make request
    const result = await createHttpRequest(global['app']).get('/api/get_user').query({ uid: 123 });

    // use expect by jest
    assert(result.status ===200);
    assert(result.body.message === 'OK');
  });
});
