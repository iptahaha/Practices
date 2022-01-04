//3) Напишите функцию, которая убирает повторяющиеся значения в массиве.
//Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function removeArrRepetition(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    let newArr = [];

    for (let element of arr) {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    }

    return newArr;
}

module.exports = {removeArrRepetition};