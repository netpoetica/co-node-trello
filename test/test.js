var co = require('co');
var settings = require("./settings.js");
var trello = require('../')(settings.key, settings.token);

var assert = require('chai').assert;

describe('get', function() {
  describe('json body', function() {
    it('should get the json body as an object', function(done) {
      co(function* () {
        var result = yield trello.get("/1/members/me");

        // assert.equal(result.statusCode, 200);
        assert.isObject(result);
        assert.property(result, 'id')
        done();
      })();
    })
  })

  describe('error response', function() {
    it('should handle 404 error', function(done) {
      co(function* () {
        var result = yield trello.get("/1/nowaythisisalink");

        assert.isString(result);
        assert.include(result, 'Cannot GET');
        done();
      })();
    })
  })
});