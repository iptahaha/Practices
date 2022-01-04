const {isEqualDeep} = require('../deepCompare_2');

describe('Task_2: write a method that makes a deep compare of two objects.', function () {

    test('VALID: different length in objects', function () {
        expect(isEqualDeep({a: 1}, {a:1, b: 2})).toBe(false);
    })
    test('VALID: obj1 = obj2 = 0', function () {
        expect(isEqualDeep({}, {})).toBe(true);
    })
    test('VALID: different objects', function () {
        expect(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { d: 1 } })).toBe(false);
    })
    test('VALID: same objects', function () {
        expect(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
    })
    test('INVALID: obj1 is not an object', function () {
        expect(isEqualDeep(16, {})).toBe(false);
    })
    test('INVALID: obj2 is not object', function () {
        expect(isEqualDeep({}, 'test')).toBe(false);
    })
})