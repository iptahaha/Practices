//1)Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод
// ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее
// первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
// первую букву каждого слова этой строки.

class MyString {

    reverse(str) {
        if (str) {
            return str.split("").reverse().join("");
        }
        return false;
    }

    ucFirst(str) {
        if (str) {
            return str[0].toUpperCase() + str.slice(1);
        }
        return false;
    }

    ucWords(str) {
        if (str) {
            return str.split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
        }
        return false;
    }
}

let str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

//2)Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет
// метод isEmail параметром принимает строку и проверяет, является ли она корректным
// емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того,
// класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate
// для проверки даты и метод isPhone для проверки телефона

class Validator {

    isEmail(email) {
        if (email) {
            const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(String(email));
        }
        return false;
    }

    isDomain(domain) {
        if (domain) {
            const re = /^\w+[.]net$/;
            return re.test(domain);
        }
        return false;
    }

    isDate(date) {
        if (date) {
            const re = /^\(?([0-9]{2})\)?[.]?([0-9]{2})[.]?([0-9]{4})$/;
            return re.test(date);
        }
        return false;
    }

    isPhone(phone) {
        if (phone) {
            const re = /^\+?(380)[ ]?\(?([0-9]{2})\)?[ ]([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/;
            return re.test(phone);
        }
        return false;
    }
}

let validator = new Validator();
// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+380 (29) 817-68-92'));

module.exports.Validator = Validator;
module.exports.MyString = MyString;