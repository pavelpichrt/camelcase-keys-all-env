const isObject = obj => typeof obj === 'object' && obj !== null

export default function camelCaseKeys(obj) {
    if (!isObject(obj)) {
        return obj
    }

    let parsedObj = {}

    if (Array.isArray(obj)) {
        return obj.map(item => camelCaseKeys(item))
    }

    Object.keys(obj).forEach(key => {
        let camelCaseKey = key.replace(/([\-_]\w)/g, matches => matches[1].toUpperCase())
        let val = obj[key]

        camelCaseKey = camelCaseKey[0].toLowerCase() + camelCaseKey.slice(1)

        if (isObject(val)) {
            val = camelCaseKeys(val)
        }

        parsedObj[camelCaseKey] = val
    })

    return parsedObj
}
