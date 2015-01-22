'use strict';

const should = require('chai').should(),
    heartbeat = require('../routes/heartbeatRoute.js');

describe('Heartbeat status', function(){

   it('must send back a response', function(){
       let obtainedValue,
           obtainedBody;

       let res = {
           send: function(value, body){
               obtainedValue = value;
               obtainedBody = body;
           }
       };

       heartbeat.makeHeartbeat(null, res, function(){});

       obtainedValue.should.equal(200);
       obtainedBody.should.equal('OK');
   });

   it('must call the next function', function(done){
       let res = {
           send: function(){}
       };

       heartbeat.makeHeartbeat(null, res, done);
   })
});
