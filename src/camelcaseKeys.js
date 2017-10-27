const isObject = obj => typeof obj === 'object' && obj !== null

function Cache(maxSize) {
    this._noOfKeys = 0
    this._maxSize = maxSize
    this._vals = {}
}

Cache.prototype.set = function(key, val) {
    if (!this._vals[key]) {
        this._vals[key] = val
        this._noOfKeys++

        if (this._noOfKeys > this._maxSize) {
            this.clear()
        }
    }
}

Cache.prototype.setSize = function(size) {
    this._maxSize = size
}

Cache.prototype.get = function(key) {
    return this._vals[key]
}

Cache.prototype.clear = function(key) {
    this._vals = {}
    this._noOfKeys = 0
}

let cache = new Cache(1000)

const camelCaseKeys = obj => {
    if (!obj || !isObject(obj)) {
        return obj
    }

    let parsedObj = {}

    if (Array.isArray(obj)) {
        return obj.map(item => camelCaseKeys(item))
    }

    for (const key in obj) {
        let camelCaseKey = cache.get(key)
        let val = obj[key]

        if (!camelCaseKey) {
            camelCaseKey = key.replace(/([\-_]\w)/g, matches => matches[1].toUpperCase())
            camelCaseKey = camelCaseKey[0].toLowerCase() + camelCaseKey.slice(1)
            cache.set(key, camelCaseKey)
        }

        if (isObject(val)) {
            val = camelCaseKeys(val)
        }

        parsedObj[camelCaseKey] = val
    }

    return parsedObj
}

export default camelCaseKeys
