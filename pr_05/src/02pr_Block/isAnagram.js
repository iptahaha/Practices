//3. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами,
// причем регистр букв не имеет значения. Учитываются лишь символы;
// пробелы или знаки препинания в расчет не берутся.

function isAnagram(a, b) {
    if (a === '' || b === '' || typeof a === 'number' || typeof b === 'number') {
        return 'Invalid input data';
    }
    a = a.replace(/[^a-zа-яё]/gi, '');//Убираются лишние символы, которые не берутся в расчёт
    b = b.replace(/[^a-zа-яё]/gi, '');
    let strA = a.toLowerCase().split('').sort().join('');
    let strB = b.toLowerCase().split('').sort().join('');

    if (strA === strB) {
        return 'This is anagram';
    } else {
        return 'This is NOT anagram';
    }
}

module.exports = {isAnagram};