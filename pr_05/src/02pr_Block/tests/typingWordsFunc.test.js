const {typingWordsFunc} = require('../typingWordsFunc');

test('typingWordsFunc(x) VALID', () => {
    expect(typingWordsFunc(15)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive ');
});

test('typingWordsFunc(x) INVALID: x = ""', () => {
    expect(typingWordsFunc('')).toBe('Invalid input data');
});

test('typingWordsFunc(x) INVALID: x = "string"', () => {
    expect(typingWordsFunc('string')).toBe('Invalid input data');
});

test('typingWordsFunc(x) INVALID: x = 0', () => {
    expect(typingWordsFunc(0)).toBe('0');
});