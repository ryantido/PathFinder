import request from 'supertest';
import app from '../src/app';

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'Test1234', name: 'Test User' });
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('email', 'test@example.com');
  });

  it('should login with correct credentials', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({ email: 'login@example.com', password: 'Test1234', name: 'Login User' });
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'login@example.com', password: 'Test1234' });
    expect(res.statusCode).toBe(200);
    expect(res.body.user).toHaveProperty('email', 'login@example.com');
  });
});
