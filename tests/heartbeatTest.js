var assert = require('assert');
var request = require('request');
var server = require('../server.js');

var config = JSON.parse(require('fs').readFileSync('config.json', 'utf8'));

var OPTIONS = {
    url: 'http://localhost:' + config.publicPort + '/heartbeat',
    method: 'GET'
};

describe("Server must be alive", function(){
    beforeEach (function(done){
        server.start(config.publicPort, done);
    });

    afterEach (function(done){
        server.stop(done);
    });

    it("it must have a heartbeat", function(done){
        request(OPTIONS, function(err, res, body){
            assert.equal(err, null);
            assert.equal(res.statusCode, 200, body);
            done();
        });
    });
});
