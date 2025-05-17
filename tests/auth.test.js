const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Auth API', () => {
  it('should register a new user', (done) => {
    chai.request(server)
      .post('/api/auth/register')
      .send({ username: 'testuser', email: 'test@example.com', password: '123456' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('token');
        done();
      });
  });

  it('should login a user', (done) => {
    chai.request(server)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: '123456' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token');
        done();
      });
  });
});
