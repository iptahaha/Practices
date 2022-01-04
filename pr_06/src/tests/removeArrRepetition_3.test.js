const {removeArrRepetition} = require('../removeArrRepetition_3');

describe('Task_3: write a function that removes duplicate values in the array.', function () {

    test('VALID: Numbers. Array with duplicate values', function () {
        expect(removeArrRepetition([1, 2, 3, 1, 2])).toStrictEqual([1, 2, 3]);
    })
    test('VALID: Numbers. Array without duplicate values', function () {
        expect(removeArrRepetition([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    })
    test('VALID: String. Array with duplicate values', function () {
        expect(removeArrRepetition(['one', 'two', 'three', 'one', 'two'])).toStrictEqual(['one', 'two', 'three']);
    })
    test('VALID: String. Array without duplicate values', function () {
        expect(removeArrRepetition(['one', 'two', 'three', 'four'])).toStrictEqual(['one', 'two', 'three', 'four']);
    })
    test('VALID: Combo-types. Array with duplicate values', function () {
        expect(removeArrRepetition([1, 'two', {a: 3}, 1, 'two'])).toStrictEqual([1, 'two', {a: 3}]);
    })
    test('VALID: Combo-types. Array without duplicate values', function () {
        expect(removeArrRepetition([1, 'two', {a: 3}])).toStrictEqual([1, 'two', {a: 3}]);
    })
    test('VALID: empty array', function () {
        expect(removeArrRepetition([])).toStrictEqual([]);
    })
    test('INVALID: not an array', function () {
        expect(removeArrRepetition(16)).toBe(false);
    })
})