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

    function Cache(maxSize) {
        this._noOfKeys = 0;
        this._maxSize = maxSize;
        this._vals = {};
    }

    Cache.prototype.set = function (key, val) {
        if (!this._vals[key]) {
            this._vals[key] = val;
            this._noOfKeys++;

            if (this._noOfKeys > this._maxSize) {
                this.clear();
            }
        }
    };

    Cache.prototype.setSize = function (size) {
        this._maxSize = size;
    };

    Cache.prototype.get = function (key) {
        return this._vals[key];
    };

    Cache.prototype.clear = function (key) {
        this._vals = {};
        this._noOfKeys = 0;
    };

    var cache = new Cache(1000);

    var camelCaseKeys = function camelCaseKeys(obj) {
        if (!obj || !isObject(obj)) {
            return obj;
        }

        var parsedObj = {};

        if (Array.isArray(obj)) {
            return obj.map(function (item) {
                return camelCaseKeys(item);
            });
        }

        for (var key in obj) {
            var camelCaseKey = cache.get(key);
            var val = obj[key];

            if (!camelCaseKey) {
                camelCaseKey = key.replace(/([\-_]\w)/g, function (matches) {
                    return matches[1].toUpperCase();
                });
                camelCaseKey = camelCaseKey[0].toLowerCase() + camelCaseKey.slice(1);
                cache.set(key, camelCaseKey);
            }

            if (isObject(val)) {
                val = camelCaseKeys(val);
            }

            parsedObj[camelCaseKey] = val;
        }

        return parsedObj;
    };

    exports.default = camelCaseKeys;
});
