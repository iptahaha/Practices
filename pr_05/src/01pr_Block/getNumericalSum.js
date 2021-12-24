//3.Создайте функцию, которая принимает два аргумента: число, представленное в виде строки, и число.
// Если аргумент типа number делится на 3, 5 и 15 без остатка - умножьте его на -1. Функция должна
// возвращать числовую сумму двух аргументов.

function getNumericalSum(str, num) {
    if (num%3 === 0 && num%5 === 0 && num%15 === 0) {
        num = num * (-1);
    }
    return (str/1 + num);
}

module.exports = getNumericalSum;
//console.log(getNumericalSum('300', 150));
