/* globals it,describe */

'use strict';
var request = require('supertest');

var app = require('../../src/server/server');

describe('api routes', function() {

  it('GET /api/non-existent - returns http/404', function(done) {
    request(app)
      .get('/api/non-existent')
      .expect(404, done);
  });

  it('GET /api/ - returns json and http/200', function(done) {
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/defaults - returns json and http/200', function(done) {
    request(app)
      .get('/api/defaults')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('PUT /api/defaults - returns json and http/200', function(done) {
    request(app)
      .put('/api/defaults')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /api/tunnels - returns json and http/200', function(done) {
    request(app)
      .get('/api/tunnels')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('PUT /api/tunnels - returns json and http/200', function(done) {
    request(app)
      .put('/api/tunnels')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST /api/tunnels - returns json and http/200', function(done) {
    request(app)
      .post('/api/tunnels')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });


  it('GET /api/tunnel/:tunnelname - returns json and http/200', function(done) {
    request(app)
      .get('/api/tunnel/foobar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('PUT /api/tunnel/:tunnelname - returns json and http/200', function(done) {
    request(app)
      .put('/api/tunnel/foobar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST /api/tunnel/:tunnelname - returns json and http/200', function(done) {
    request(app)
      .post('/api/tunnel/foobar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('DELETE /api/tunnel/:tunnelname - returns json and http/200', function(done) {
    request(app)
      .delete('/api/tunnel/foobar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });


});
