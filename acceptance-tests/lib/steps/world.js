'use strict';

const _ = require('lodash');

const World = function (callback) {

    let sandbox = {};

    callback({
        publishValue: publishValue,
        getValue: getValue
    });

    function publishValue(name, value) {
        let newProperties = {};
        newProperties[name] = value;

        sandbox = _.assign(sandbox, newProperties)
    }

    function getValue(name) {
        return sandbox[name];
    }
};

module.exports = function () {
    this.World = World;
};
