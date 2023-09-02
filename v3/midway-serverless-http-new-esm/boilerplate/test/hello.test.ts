import { createHttpRequest } from '@midwayjs/mock';
import { Application } from '@midwayjs/faas';
import { getApp } from './setup.js';
import assert from 'assert';

describe('test/index.test.ts', () => {

  it('should get result from http trigger', async () => {
    const app: Application = getApp();
    const result = await createHttpRequest(app).get('/').query({
      name: 'Midway.js'
    })
    assert(result.text === 'Hello Midway.js');
  });
});
