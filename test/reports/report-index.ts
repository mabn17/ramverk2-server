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

var should = require('chai').should();

import * as server from '../../src/index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as assert from 'assert';

chai.should();
chai.use(chaiHttp);

const content = { title: 'test', data: 'something' };

describe('Test for route /reports', () => {
  describe('GET /reports', () => {
    it('Status 200 & Content', (done) => {
      chai
        .request(server)
        .get('/reports')
        .end((err, res) => {
          const response = res.body.extra;
          console.log(response);
          res.should.have.status(200);
          assert.equal(response.length, 2);

          done();
        });
    });
  });
  describe('POST /reports', () => {
    it('Create a new report', (done) => {
      chai
        .request(server)
        .post('/reports')
        .send({ title: content.title, text: content.data })
        .end((err, res) => {
          const response = res.body.data;

          res.should.have.status(201);
          assert.equal(response.data.title, content.title);
          assert.equal(response.data.data, content.data);

          done();
        });
    });
  });
  describe('POST /reports', () => {
    it('Create a new report (same values)', (done) => {
      chai
        .request(server)
        .post('/reports')
        .send({ title: content.title, text: content.data })
        .end((err, res) => {
          const response = res.body.errors;

          res.should.have.status(500);
          assert.equal(response.title, 'Database error.');

          done();
        });
    });
  });
  describe('POST /reports', () => {
    it('With empty data values', (done) => {
      chai
        .request(server)
        .post('/reports')
        .send({ })
        .end((err, res) => {
          const response = res.body.errors;

          res.should.have.status(401);
          assert.equal(response.title, 'Missing values.');

          done();
        });
    });
  });
  describe('GET /reports', () => {
    it('Checks so its the correct number of reports', (done) => {
      chai
        .request(server)
        .get('/reports')
        .end((err, res) => {
          const response = res.body.extra;

          res.should.have.status(200);
          assert.equal(response.length, 3);

          done();
        });
    });
  });
});
