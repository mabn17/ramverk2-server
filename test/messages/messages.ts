/*!
 * By:
 * Martin Borg
 */

/**
 * |--------------------------------------------------
 * | Testing [GET, POST] for /reports
 * |--------------------------------------------------
 */

process.env.NODE_ENV = 'test';

import * as server from '../../src/index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as assert from 'assert';

var should = require('chai').should();

chai.should();
chai.use(chaiHttp);

describe('Test for route /chat', () => {
  describe('GET /chat', () => {
    it('Status 500', (done) => {
      chai
        .request(server)
        .get('/chat')
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });

  describe('POST /chat', () => {
    it('Status 500', (done) => {
      chai
        .request(server)
        .post('/chat')
        .send({message: []})
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});
