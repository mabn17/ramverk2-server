/*!
 * By:
 * Martin Borg
 */

/**
 * |--------------------------------------------------
 * | Testing [GET, POST, PUT, DELETE] /
 * |--------------------------------------------------
 */

process.env.NODE_ENV = 'test';

import * as server from '../../src/index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as assert from 'assert';

chai.should();
chai.use(chaiHttp);

describe('Test for route GET /', () => {
  describe('GET /', () => {
    it('Status 200 & Content', (done) => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          const data = res.body.data;

          res.should.have.status(200);
          res.body.should.be.an('object');

          assert.equal(data.title, 'me');

          done();
        });
    });
  });
  describe('POST /', () => {
    it('Should return 404', (done) => {
      chai
        .request(server)
        .post('/')
        .send({})
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
  describe('PUT /', () => {
    it('Should return 404', (done) => {
      chai
        .request(server)
        .post('/')
        .send({})
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
  describe('DELETE /', () => {
    it('Should return 404', (done) => {
      chai
        .request(server)
        .post('/')
        .send({})
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
});
