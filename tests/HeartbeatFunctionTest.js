var assert = require('assert');
var heartbeat = require('../routes/heartbeatRoute.js');

describe('Heartbeat status', function(){
   it('must send back a response', function(){
       var obtainedValue,
           obtainedBody;

       var res = {
           send: function(value, body){
               obtainedValue = value;
               obtainedBody = body;
           }
       };

       heartbeat.makeHeartbeat(null, res, function(){});

       assert.deepEqual(obtainedValue, 200);
       assert.deepEqual(obtainedBody, 'OK');
   });

   it('must call the next function', function(done){
       var res = {
           send: function(value, body){}
       };

       heartbeat.makeHeartbeat(null, res, done);
   })
});
