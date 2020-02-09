import request from 'supertest';
import createServer from '../src/index';

describe('healthcheck', () => {
  it('returns a healthy status', () =>
    request(createServer())
      .get('/healthcheck')
      .expect(200));
});
