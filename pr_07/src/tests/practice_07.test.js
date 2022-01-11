const {MyString, Validator} = require('../practice_07');

describe('1) Класс MyString, который имеет методы: reverse(), ucFirst(), ucWords',function () {
    const str = new MyString();
    test('VALID data: ("abcde")',function () {
        expect(str.reverse('abcde')).toBe('edcba');
    })
    test('VALID data: ("abcde")',function () {
        expect(str.ucFirst('abcde')).toBe('Abcde');
    })
    test('VALID data: ("abcde abcde abcde")',function () {
        expect(str.ucWords('abcde abcde abcde')).toBe('Abcde Abcde Abcde');
    })

    test('INVALID data: undefined',function () {
        expect(str.reverse(undefined)).toBeFalsy();
    })
    test('INVALID data: undefined',function () {
        expect(str.ucFirst(undefined)).toBeFalsy();
    })
    test('INVALID data: undefined',function () {
        expect(str.ucWords(undefined)).toBeFalsy();
    })
})

describe('1) Класс Validator, который будет проверять строки.',function () {
    const validator = new Validator();
    test('VALID data: ("phphtml@mail.ru")',function () {
        expect(validator.isEmail('phphtml@mail.ru')).toBeTruthy();
    })
    test('VALID data: ("phphtml.net")',function () {
        expect(validator.isDomain('phphtml.net')).toBeTruthy();
    })
    test('VALID data: ("12.05.2020")',function () {
        expect(validator.isDate('12.05.2020')).toBeTruthy();
    })
    test('VALID data: ("+380 (29) 817-68-92")',function () {
        expect(validator.isPhone('+380 (29) 817-68-92')).toBeTruthy();
    })

    test('INVALID data: undefined',function () {
        expect(validator.isEmail(undefined)).toBeFalsy();
    })
    test('INVALID data: undefined',function () {
        expect(validator.isDomain(undefined)).toBeFalsy();
    })
    test('INVALID data: undefined',function () {
        expect(validator.isDate(undefined)).toBeFalsy();
    })
    test('INVALID data: undefined',function () {
        expect(validator.isPhone(undefined)).toBeFalsy();
    })
})