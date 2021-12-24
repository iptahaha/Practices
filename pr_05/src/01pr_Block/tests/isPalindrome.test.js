const {isPalindrome} = require('../isPalindrome');

test('isPalindrome(str) VALID data', () => {
    expect(isPalindrome('А роза упала на лапу Азора')).toBe(true);
});

test('isPalindrome(str) VALID data - minimum, 2 symbols', () => {
    expect(isPalindrome('AA')).toBe(true);
});

test('isPalindrome(str) NOT palindrome - string', () => {
    expect(isPalindrome('Просто некая строка не полиндром')).toBe(false);
});

test('isPalindrome(str) NOT palindrome - number', () => {
    expect(isPalindrome('1234 567 89')).toBe(false);
});

test('isPalindrome(str) NOT palindrome - empty string', () => {
    expect(isPalindrome('')).toBe('Incorrect input data');
});