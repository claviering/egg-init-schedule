'use strict';

const mock = require('egg-mock');

describe('test/init-schedule.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/init-schedule-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, initSchedule')
      .expect(200);
  });
});
