const camelcaseKeys = require('camelcase-keys')
const camelcaseKeysRecursive = require('camelcase-keys-recursive')
const camelcaseKeysAllEnv = require('../../dist/camelcase-keys').default
const camelcaseObject = require('camelcase-object')
const lodashHumps = require('lodash-humps')

const testStub = require('./test-stub.json')
const testStubSmall = require('./test-stub-small.json')

const runTest = (name, run, iterations) => {
    const start = new Date()

    for (let i = 0; i < iterations; i++) {
        run()
    }

    const end = new Date()
    const time = end - start

    console.log(`${name}: ${time}ms`)
}

console.log('Huge JSON:')
console.log('---')
runTest('camelcase-keys-all-env', () => camelcaseKeysAllEnv(testStub), 1000)
runTest('camelcase-keys', () => camelcaseKeys(testStub, { deep: true }), 1000)
runTest('camelcase-keys-recursive', () => camelcaseKeysRecursive(testStub), 1000)
runTest('lodash-humps', () => lodashHumps(testStub), 1000)
runTest('camelcase-object', () => camelcaseObject(testStub), 1000)

console.log()
console.log('Small JSON:')
console.log('---')
runTest('camelcase-keys-all-env', () => camelcaseKeysAllEnv(testStubSmall), 10000)
runTest('camelcase-keys', () => camelcaseKeys(testStubSmall, { deep: true }), 10000)
runTest('camelcase-keys-recursive', () => camelcaseKeysRecursive(testStubSmall), 10000)
runTest('lodash-humps', () => lodashHumps(testStubSmall), 10000)
runTest('camelcase-object', () => camelcaseObject(testStubSmall), 10000)
