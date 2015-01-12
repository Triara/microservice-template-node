# Microservice template (node.js)

Simple server with a heartbeat route.

To run the server on the port stored in the config file

`npm run server`

To run tests and check everything is ok

`npm run mocha`

## How to add now routes

All files located inside the 'routes' folder will be loaded from the server. All they must export a single function`accepting a service param (the server itself).


```javascript
function addRoutes (service) {
    service.get('/heartbeat', makeHeartbeat);
}

module.exports = addRoutes;
```
