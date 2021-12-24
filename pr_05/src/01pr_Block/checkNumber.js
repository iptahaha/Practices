//4. Создайте функцию, которая проверяет число на соответствие трем различным требованиям:
// - число простое
// - число четное
// - число кратно 10
// Каждый должен возвращать истину или ложь, которые должны быть представлены в виде массива
function checkNumber(value) {
    if (typeof value !== "number") {
        return 'Invalid input data';
    }
    let rez = new Array(3);
    if (value < 0) {
        rez [0] = false;
    } else if (value === 2) {
        rez [0] = true;
    } else if (value === 0 || value === 1){
        return 'don`t Complicate!';
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

module.exports = {checkNumber};