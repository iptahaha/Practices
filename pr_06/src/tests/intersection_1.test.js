const {intersection} = require('../intersection_1');

describe('Task_1: write a method that finds shallow intersections of objects.', function () {

    test('VALID: obj1 and obj2 have no intersections', function () {
        expect(intersection({a: 1, b: 2}, {c: 1, b: 3})).toStrictEqual({});
    })
    test('VALID: obj1 and obj2 have one intersection', function () {
        expect(intersection({a: 1, b: 2}, {c: 1, b: 2})).toStrictEqual({b: 2});
    })
    test('VALID: obj1 and obj2 have few intersections', function () {
        expect(intersection({a: 1, b: 2, c: 3}, {c: 3, b: 2})).toStrictEqual({b: 2, c: 3});
    })
    test('INVALID: obj1 is number, not an object', function () {
        expect(intersection(77, {})).toBe('Incorrect input data');
    })
    test('INVALID: obj2 is number, not an object', function () {
        expect(intersection({}, 77)).toBe('Incorrect input data');
    })
    test('INVALID: obj1 is string, not an object', function () {
        expect(intersection('77', {})).toBe('Incorrect input data');
    })
    test('INVALID: obj2 is string, not an object', function () {
        expect(intersection({}, '77')).toBe('Incorrect input data');
    })
})