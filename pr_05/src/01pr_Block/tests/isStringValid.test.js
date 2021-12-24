const isStringValid = require('../isStringValid');

test('isStringValid(str) VALID data', () => {
    expect(isStringValid('Hello !')).toBe('VALID');
});

test('isStringValid(str) INVALID: unacceptable symbols in valid string', () => {
    expect(isStringValid('Hel&lo !')).toBe('VALID');
});

test('isStringValid(str) INVALID: not any symbol - Hello', () => {
    expect(isStringValid('Hello')).toBe('INVALID');
});

test('isStringValid(str) INVALID: small 1st letter -  hello!', () => {
    expect(isStringValid('hello!')).toBe('INVALID');
});

test('isStringValid(str) INVALID: <2 symbols in string', () => {
    expect(isStringValid('H')).toBe('INVALID');
});

test('isStringValid(str) INVALID: >20 symbols in string', () => {
    expect(isStringValid('Hello! Abcde fghij Klmnop?')).toBe('INVALID');
});

test('isStringValid(str) INVALID: string number - 12345', () => {
    expect(isStringValid('12345')).toBe('INVALID');
});

test('isStringValid(str) INVALID: 1st letter is number - 12345!A', () => {
    expect(isStringValid('12345!A')).toBe('INVALID');
});

test('isStringValid(str) INVALID: not any symbol or letter - A12345', () => {
    expect(isStringValid('A12345')).toBe('INVALID');
});

test('isStringValid(str) INVALID: 1st letter is symbol - !Hello', () => {
    expect(isStringValid('!Hello')).toBe('INVALID');
});
test('isStringValid(str) INVALID: unacceptable symbols string - %&&$#*', () => {
    expect(isStringValid('%&&$#*')).toBe('INVALID');
});

test('isStringValid(str) Incorrect: number', () => {
    expect(isStringValid(12345)).toBe('Incorrect input data');
});

test('isStringValid(str) Incorrect: empty string', () => {
    expect(isStringValid('')).toBe('Incorrect input data');
});