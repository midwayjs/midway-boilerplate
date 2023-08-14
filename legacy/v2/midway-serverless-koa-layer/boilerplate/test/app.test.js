const request = require('supertest');

describe('/test/app.test.ts', () => {

  let app;
  beforeAll(async () => {
    app = await require('../app')();
  });

  it('should test with get', done => {
    request(app.callback())
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(/Hello World/)
      .expect(200, done);
  });

  it('should test with get and query', done => {
    request(app.callback())
      .get('/get/query')
      .query({
        b: 1,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(/{"query":{"b":"1"}}/)
      .expect(200, done);
  });

  it('should test with post', done => {
    request(app.callback())
      .post('/post')
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .expect(/Hello World, post/)
      .expect(200, done);
  });

  it('should test with post and body', done => {
    request(app.callback())
      .post('/post/body')
      .send({
        b: 1,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(/{"body":{"b":1}}/)
      .expect(200, done);
  });
});
