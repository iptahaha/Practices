const {checkNumber} = require('../checkNumber');

test('checkNumber(value) VALID: 7', () => {
    expect(checkNumber(7)).toEqual([true, false, false]);
});

test('checkNumber(value) VALID: -10', () => {
    expect(checkNumber(-10)).toEqual([false, true, true]);
});

test('checkNumber(value) VALID: 2', () => {
    expect(checkNumber(2)).toEqual([true, true, false]);
});

test('checkNumber(value) VALID: 44', () => {
    expect(checkNumber(44)).toEqual([false, true, false]);
});

test('checkNumber(value) VALID: 55', () => {
    expect(checkNumber(55)).toEqual([false, false, false]);
});

test('checkNumber(value) INVALID: string', () => {
    expect(checkNumber('some string')).toBe('Invalid input data');
});

test('checkNumber(value) INVALID: 0', () => {
    expect(checkNumber(0)).toBe('don`t Complicate!');
});

test('checkNumber(value) INVALID: 1', () => {
    expect(checkNumber(1)).toBe('don`t Complicate!');
});