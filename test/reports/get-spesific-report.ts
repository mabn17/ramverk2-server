/*!
 * By:
 * Martin Borg
 */

/**
 * |--------------------------------------------------
 * | Testing GET for /reports/:kmom
 * |--------------------------------------------------
 */

process.env.NODE_ENV = 'test';

import * as server from '../../src/index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as assert from 'assert';

chai.should();
chai.use(chaiHttp);

describe('GET /reports/:kmom', () => {
  describe('GET /reports/kmom01', () => {
    it('Should exist', (done) => {
      chai
        .request(server)
        .get('/reports/kmom01')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');

          done();
        });
    });
  });
  describe('GET /reports/dosentexist', () => {
    it('Should be undefined', (done) => {
      chai
        .request(server)
        .get('/reports/dosentexist')
        .end((err, res) => {
          const response = res.body.errors;

          res.should.have.status(401);
          assert.equal(response.title, 'Report not found.');

          done();
        });
    });
  });
});
