'use strict';

const should = require('chai').should();


module.exports = thenResponseCodeIs;

function thenResponseCodeIs(){
    this.Then(/^the response code must be (\d+)$/, function (expectedStatusCode, done) {
        (this.getValue('statusCode')).toString().should.equal(expectedStatusCode);
        done();
    });
}
