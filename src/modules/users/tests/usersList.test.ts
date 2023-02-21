import request from 'supertest';
import app from '../../../loaders/app';

describe('USERS LIST', () => {
  it('Should return a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.body.length).toBeGreaterThan(0);
  });
});
