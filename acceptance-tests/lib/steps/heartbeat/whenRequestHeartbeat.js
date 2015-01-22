'use strict';

const request = require('request'),
    config = JSON.parse(require('fs').readFileSync('./config.json', 'utf8')),
    World = require('../world'),
    should = require('chai').should(),
    expect = require('chai').expect;

module.exports = whenRequestHeartbeatStep;

function whenRequestHeartbeatStep() {
    this.When(/^I request the heartbeat$/, function (done) {
        var OPTIONS = {
            url: 'http://localhost:' + config.publicPort + '/heartbeat',
            method: 'GET'
        };
        var world = this;

        request(OPTIONS, function(err, res, body){
            expect(err).to.be.null;

            world.publishValue('statusCode', res.statusCode);
            done();
        });
    });
}
