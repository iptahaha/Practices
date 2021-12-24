//2.Написать функцию, которая принимает аргумент и валидирует его
// по правилам:
// - Строка должна содержать буквы и специальные символы
// включая пробел: [ , ! , : , - , ? , . , , ]
// - Длина строки должна быть больше 2 символов и меньше 20
// - Начинаться строка должна с заглавной буквы
// Функция должна вернуть “VALID” или “INVALID”, в случае если в
// аргумент передана не строка вывести ‘Incorrect input data’
// Без использования регулярных выражений

function isStringValid(str) {
    const specSigns = ' !:-?.,';
    if (str === '' || typeof str !== 'string') {
        return 'Incorrect input data';
    }

    if (str.length < 2 || str.length > 20 || str[0].toUpperCase() !== str[0] || specSigns.includes(str[0])) {
        return 'INVALID';
    }

    let countChar = false;
    let countSign = false;

    for (let i = 0; i < str.length; i++) {
        let someChar = str.charCodeAt(i);
        if (65 <= someChar <= 90 || 97 <= someChar <= 122 || 192 <= someChar <= 255) {
            countChar = true;
        }

        for (let j = 0; j < specSigns.length; j++) {
            if (str[i] === specSigns[j]) {
                countSign = true;
            }
        }
    }
    if (countChar && countSign && isNaN(str[0])) {
        return 'VALID';
    } else {
        return 'INVALID';
    }
}

module.exports = isStringValid;
