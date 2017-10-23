'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = camelCaseKeys;
var isObject = function isObject(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
};

function camelCaseKeys(obj) {
    if (!isObject(obj)) {
        return obj;
    }

    var parsedObj = {};

    if (Array.isArray(obj)) {
        return obj.map(function (item) {
            return camelCaseKeys(item);
        });
    }

    Object.keys(obj).forEach(function (key) {
        var camelCaseKey = key.replace(/([\-_]\w)/g, function (matches) {
            return matches[1].toUpperCase();
        });
        var val = obj[key];

        camelCaseKey = camelCaseKey[0].toLowerCase() + camelCaseKey.slice(1);

        if (isObject(val)) {
            val = camelCaseKeys(val);
        }

        parsedObj[camelCaseKey] = val;
    });

    return parsedObj;
}