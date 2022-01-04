const {isEmpty} = require('../isEmpty_4');

describe('Task_4: write a function that superficially checks an object for emptiness.', function () {

    test('VALID data: object is not empty - {a: undefined, b: 1}', function () {
        expect(isEmpty({ a: undefined, b: 1 })).toBe(false);
    })
    test('VALID data: object is not empty - {a: 1}', function () {
        expect(isEmpty({ a: 1 })).toBe(false);
    })
    test.each([
        [{}, true],
        [{a: ''}, true],
        [{a: null }, true],
        [{a: NaN }, true],
        [{a: undefined}, true],
    ])('VALID data: object is empty', function (object, result) {
        expect(isEmpty(object)).toBe(result);
    })
    test('INVALID data: not an object', function () {
        expect(isEmpty(16)).toBe('Incorrect input data');
    })
})
