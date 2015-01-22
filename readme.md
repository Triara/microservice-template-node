# Microservice template (node.js)

Simple server with a heartbeat route.

To run the server on the port stored in the config file

`npm run server`

To run unit tests and check everything is ok

`npm run mocha`

And to run acceptance tests

`npm run cucumber`


## How to add new routes to server

All files located inside the 'routes' folder will be loaded from the server. All they must export a single function`accepting a service param (the server itself).


```javascript
function addRoutes (service) {
    service.get('/heartbeat', makeHeartbeat);
}

module.exports = addRoutes;
``
