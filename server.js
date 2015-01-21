var restify = require('restify');
var fs = require('fs');
var path = require('path');

function startServer (port, cbk){
    server = restify.createServer({
        name: 'simple microservice'
    });

    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    var routesPath = path.join(__dirname, './routes/');
    fs.readdirSync(routesPath).forEach(function(filename) {
        require(routesPath + filename).addRoutes(server);
    });

    server.listen(port, function(){
        cbk();
    });
}

function stopServer (cbk){
    server.close(function(){
        cbk();
    });
}

module.exports = {
    start: startServer,
    stop: stopServer
};
