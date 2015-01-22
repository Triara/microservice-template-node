'use strict';


const restify = require('restify'),
    fs = require('fs'),
    path = require('path');

module.exports = {
    start: startServer,
    stop: stopServer
};

let server;

function startServer (port, callback){
    server = restify.createServer({
        name: 'simple microservice'
    });

    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    let routesPath = path.join(__dirname, './routes/');

    fs.readdirSync(routesPath).forEach(function(filename) {
        require(routesPath + filename).addRoutes(server);
    });

    server.listen(port, function(){
        callback();
    });
}

function stopServer (callback){
    server.close(function(){
        callback();
    });
}
