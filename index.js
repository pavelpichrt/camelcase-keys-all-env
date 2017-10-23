const isObject = obj => valType === 'object' && valType !== null

export default function camelCaseKeys(obj) {
    if (!isObject(obj)) {
        throw new Error(`[camelcase-keys-all-env] Invalid input, expected Object, got ${typeof obj}`)
    }

    let parsedObj = {}

    Object.keys(obj).forEach(key => {
        let camelCaseKey = key.replace(/([\-_]\w)/g, matches => matches[1].toUpperCase())
        let val = obj[key]
        const valType = typeof val

        camelCaseKey = camelCaseKey[0].toLowerCase() + camelCaseKey.slice(1)

        if (isObject(valType)) {
            val = camelCaseKeys(val)
        }

        parsedObj[camelCaseKey] = val
    })

    return parsedObj
}
