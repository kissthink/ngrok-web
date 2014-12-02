/* globals it,describe */

'use strict';
var request = require('supertest');

var app = require('../../src/server/server');

describe('client routes', function() {
  it('GET /index.html - returns http/200 bodystring/TBD', function(done) {
    request(app)
      .get('/index.html')
      .expect('Content-Type', /html/)
      .expect(200, /TBD/, done);
  });
});
