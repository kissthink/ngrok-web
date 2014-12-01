/* globals it,describe */

'use strict';
var request = require('supertest');

var app = require('../../src/server/server');

describe('client routes', function() {
  it('GET /index.html - returns http/200', function(done) {
    request(app)
      .get('/index.html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('GET /bower_components/jquery/MIT-LICENSE.txt - returns http/200', function(done) {
    request(app)
      .get('/bower_components/jquery/MIT-LICENSE.txt')
      .expect('Content-Type', /plain/)
      .expect(200, done);
  });
});

