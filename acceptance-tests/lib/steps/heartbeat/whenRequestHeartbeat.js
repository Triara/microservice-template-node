'use strict';

const config = JSON.parse(require('fs').readFileSync('./config.json', 'utf8')),
    World = require('../world'),
    should = require('chai').should(),
    _ = require('lodash'),
    expect = require('chai').expect;
let request = require('request');

module.exports = whenRequestHeartbeatStep;

function whenRequestHeartbeatStep() {
    this.When(/^I request the heartbeat$/, function (done) {
        const OPTIONS = {
            url: 'http://localhost:' + config.publicPort + '/heartbeat',
            method: 'GET'
        };

        let callback = function(err, res, body){
            expect(err).to.be.null;

            this.publishValue('statusCode', res.statusCode);
            done();
        };

        request(OPTIONS, _.bind(callback, this));
    });
}
