/**
 * Example for server test...
 */

/* global describe it */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../build/index');

chai.should();

chai.use(chaiHttp);

describe('Api TEST exempel', () => {
  describe('GET /doesnotexist', () => {
    it('404 Unknown Path', (done) => {
      chai
        .request(server)
        .get('/doesnotexist')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an('object');

          console.log('hej');
          done();
        });
    });
  });
});

/**
 * Example:
 * To test url that requires data.
 *
 * chai
    .request(server)
    .post(URL)
    .send(DATA)
    .end((err, res) => {
      assert.equal(res.status, 201);
      assert.equal(res.body.status, 'ok');
      assert.equal(res.body.data.email, DATA.email);
      done();
    });
 */
