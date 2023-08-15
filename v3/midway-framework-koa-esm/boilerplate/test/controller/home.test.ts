import { createHttpRequest } from '@midwayjs/mock';
import assert from 'assert';

describe('test/controller/home.test.ts', () => {

  it('should GET /', async () => {
    // make request
    const result = await createHttpRequest(global['app']).get('/');

    // use expect by jest
    assert(result.status === 200);
    assert(result.text === 'Hello Midwayjs!');
  });

});
