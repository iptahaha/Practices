//practice_1_08.12.21

//1.
function isPalindrome(str) {
    let strOfChar = str.toLowerCase().split(' ').join('');//
    let isPalindrome = false;
    for (let i=0; i<strOfChar.length; i++) {
        isPalindrome = strOfChar[i] === strOfChar[strOfChar.length - 1 - i];
    }
    return isPalindrome;
}
//'А роза упала на лапу Азора';
//'Просто некая строка не полиндром';
//console.log(isPalindrome('А роза упала на лапу Азора'));

//2.
function validateStrByRules (str) {

    let isValid = 'VALID';
    let isNotValid = 'INVALID';
    let rez;

    if (typeof str !== 'string') {
        return 'Incorrect input data';
    }

    if (2 > str.length || str.length > 20) {
        return isNotValid;
    }

    let countChar = false;
    let countSign = false;
    for (let i = 0; i < str.length; i++) {
        let someChar = str.charCodeAt(i);
        const specSigns = [' ', '!', ':', '-', '?', '.', ','];
        if (65 <= someChar <= 90 || 97 <= someChar <= 122 || 192 <= someChar <= 255) {
            countChar = true;
        }
        for (let j = 0; j < specSigns.length; j++) {
            if (str[i] === specSigns[j]) {
                countSign = true;
            }
        }
    }
    if (countChar && countSign) {
        rez = isValid;
    } else {
        return isNotValid;
    }

    let firstChar = str[0];
    if (str.charCodeAt(0) && firstChar.toLowerCase() === str[0]) {
        return isNotValid;
    }
    return rez;
}
//'Hello' - INVALID; 'hello' - INVALID; 'Hello !' - VALID;
//console.log(validateStrByRules('Hello !'));


//3.
function getNumericalSum(str, num) {
    if (num%3 === 0 && num%5 === 0 && num%15 === 0) {
        num = num * (-1);
    }
    return (str/1 + num);
}
//console.log(getNumericalSum('300', 150));

//4.
function checkNumber(value) {
    let rez = new Array(3);
    if (value < 0) {
        rez [0] = false;
    } else {
        for (let i = 2; i < value; i ++) {
            if (value % i === 0) {
                rez [0] = false;
                break;
            } else rez [0] = true;
        }
    }
    rez [1] = (value%2 === 0);
    rez [2] = (value%10 === 0);
    return rez;
}
//console.log(checkNumber(-10));