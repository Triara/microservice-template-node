function makeHeartbeat (req, res, next){
    res.send(200, 'OK');
    return next();
}


function addRoutes (service) {
    service.get('/heartbeat', makeHeartbeat);
}

module.exports = {
    addRoutes: addRoutes,
    makeHeartbeat: makeHeartbeat
};
