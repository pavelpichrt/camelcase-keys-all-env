const isObject = obj => typeof obj === 'object' && obj !== null

const camelCaseKeys = (obj, cache = {}) => {
    if (!obj || !isObject(obj)) {
        return obj
    }

    let parsedObj = {}
    let camelCaseKey

    if (Array.isArray(obj)) {
        return obj.map(item => camelCaseKeys(item, cache))
    }

    for (const key in obj) {
        let val = obj[key]

        if (cache[key]) {
            camelCaseKey = cache[key]
        } else {
            camelCaseKey = key.replace(/([\-_]\w)/g, matches => matches[1].toUpperCase())
            camelCaseKey = camelCaseKey[0].toLowerCase() + camelCaseKey.slice(1)
            cache[key] = camelCaseKey
        }

        if (isObject(val)) {
            val = camelCaseKeys(val, cache)
        }

        parsedObj[camelCaseKey] = val
    }

    return parsedObj
}

export default camelCaseKeys
