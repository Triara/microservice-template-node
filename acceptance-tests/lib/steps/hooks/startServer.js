'use strict';

const server = require('../../../../server.js'),
    config = JSON.parse(require('fs').readFileSync('./config.json', 'utf8'));


module.exports = startServerHook;

function startServerHook () {
    this.Before(function(scenario, done){
        server.start(config.publicPort, done);
    });
}
