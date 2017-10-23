import test from 'ava'
import cc from '../src'

test('It should camelcase the flat object keys correctly', t => {
    const objStub = {
        'some-key-and_one_more': 1,
        other_key_for_good_measure: false,
        'yet-another-key': 'value',
    }
    const actualResult = cc(objStub)
    const expectedResult = {
        otherKeyForGoodMeasure: false,
        someKeyAndOneMore: 1,
        yetAnotherKey: 'value',
    }

    t.deepEqual(actualResult, expectedResult)
})

test('It should camelcase a nested object keys correctly', t => {
    const objStub = {
        'some-key-and_one_more': 1,
        other_key_for_good_measure: false,
        nested_key: {
            something: 'asd',
            'other-nested-key': {
                deeply_nested_key: true,
            },
        },
        'yet-another-key': 'value',
    }
    const actualResult = cc(objStub)
    const expectedResult = {
        otherKeyForGoodMeasure: false,
        nestedKey: {
            otherNestedKey: {
                deeplyNestedKey: true,
            },
            something: 'asd',
        },
        someKeyAndOneMore: 1,
        yetAnotherKey: 'value',
    }

    t.deepEqual(actualResult, expectedResult)
})

test('It should camelcase a nested object keys correctly when it includes an Array', t => {
    const objStub = {
        'some-key-and_one_more': 1,
        Other_key_for_good_measure: false,
        nested_key: [
            true,
            {
                'Something_nested-deeply': 'asd',
            },
            false,
            {
                'other-nested-key': {
                    deeply_nested_key: true,
                },
            },
        ],
        'yet-another-key': 'value',
    }
    const actualResult = cc(objStub)
    const expectedResult = {
        someKeyAndOneMore: 1,
        otherKeyForGoodMeasure: false,
        nestedKey: [
            true,
            {
                somethingNestedDeeply: 'asd',
            },
            false,
            {
                otherNestedKey: {
                    deeplyNestedKey: true,
                },
            },
        ],
        yetAnotherKey: 'value',
    }

    t.deepEqual(actualResult, expectedResult)
})

test('It should return the input if it is a boolean', t => {
    const val = true

    t.is(cc(val), val)
})

test('It should return the input if it is a number', t => {
    const val = 123

    t.is(cc(val), val)
})

test('It should return the input if it is a string', t => {
    const val = 'some string'

    t.is(cc(val), val)
})
