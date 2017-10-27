(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.camelcaseKeys = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var isObject = function isObject(obj) {
        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
    };

    var camelCaseKeys = function camelCaseKeys(obj) {
        var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!obj || !isObject(obj)) {
            return obj;
        }

        var parsedObj = {};
        var camelCaseKey = void 0;

        if (Array.isArray(obj)) {
            return obj.map(function (item) {
                return camelCaseKeys(item, cache);
            });
        }

        for (var key in obj) {
            var val = obj[key];

            if (cache[key]) {
                camelCaseKey = cache[key];
            } else {
                camelCaseKey = key.replace(/([\-_]\w)/g, function (matches) {
                    return matches[1].toUpperCase();
                });
                camelCaseKey = camelCaseKey[0].toLowerCase() + camelCaseKey.slice(1);
                cache[key] = camelCaseKey;
            }

            if (isObject(val)) {
                val = camelCaseKeys(val, cache);
            }

            parsedObj[camelCaseKey] = val;
        }

        return parsedObj;
    };

    exports.default = camelCaseKeys;
});
