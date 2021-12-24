const {isAnagram} = require('../isAnagram');

test('isAnagram(a, b) VALID', () => {
    expect(isAnagram('Ложа папы', 'Жола Пыпа')).toBe('This is anagram');
});

test('isAnagram(a, b) VALID', () => {
    expect(isAnagram('Бла бла бла', 'Бал бал бал!!!')).toBe('This is anagram');
});

test('isAnagram(a, b) INVALID: not anagram string', () => {
    expect(isAnagram('Бла бла бла', 'ля ля ля')).toBe('This is NOT anagram');
});

test('isAnagram(a, b) INVALID: a = 0', () => {
    expect(isAnagram(0, 'ля ля ля')).toBe('Invalid input data');
});

test('isAnagram(a, b) INVALID b = 0', () => {
    expect(isAnagram('ля ля ля', 0)).toBe('Invalid input data');
});

test('isAnagram(a, b) INVALID: a = ""', () => {
    expect(isAnagram('', 'ля ля ля')).toBe('Invalid input data');
});

test('isAnagram(a, b) INVALID b = ""', () => {
    expect(isAnagram('ля ля ля', '')).toBe('Invalid input data');
});

test('isAnagram(a, b) INVALID: a = number', () => {
    expect(isAnagram(77, 'ля ля ля')).toBe('Invalid input data');
});

test('isAnagram(a, b) INVALID b = number', () => {
    expect(isAnagram('ля ля ля', 77)).toBe('Invalid input data');
});