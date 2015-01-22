'use strict';

const config = JSON.parse(require('fs').readFileSync('./config.json', 'utf8')),
    _ = require('lodash'),
    expect = require('chai').expect,
    request = require('request');

module.exports = whenRequestHeartbeatStep;

const OPTIONS = {
    url: 'http://localhost:' + config.publicPort + '/heartbeat',
    method: 'GET'
};

function whenRequestHeartbeatStep() {
    this.When(/^I request the heartbeat$/, function (done) {

        function callback(err, res){
            expect(err).to.be.null;

            this.publishValue('statusCode', res.statusCode);
            done();
        }

        request(OPTIONS, _.bind(callback, this));
    });
}
