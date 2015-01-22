'use strict';

const server = require('../../../../server.js'),
    config = JSON.parse(require('fs').readFileSync('./config.json', 'utf8'));


module.exports = stopServerHook;

function stopServerHook () {
    this.After(function(done){
        server.stop(done);
    });
}
