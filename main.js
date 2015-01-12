var server = require('./server.js');
var config = JSON.parse(require('fs').readFileSync('config.json', 'utf8'));

server.start(config.publicPort, function (){
    console.log('Up and running');
});
