/*1)Cоздать функцию, которая возвращает true или false, в зависимости от того,
может ли сумма любых двух чисел из массива быть равной заданному значению.
Другими словами, есть ли в массиве два целых числа x и y, которые при сложении равны указанному значению?
Пример А
Если нам дали массив [1, 2, 4, 9] и значение 8, функция вернет false, потому что никакие два числа из массива не могут дать 8 в сумме.
Пример Б
Но если это массив [1, 2, 4, 4] и значение 8, функция должна вернуть true, потому что 4 + 4 = 8.*/
const isSumEqual = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === value) {
                return true;
            }
        }
    }
    return false;
}
// console.log(isSumEqual([1, 2, 4, 9], 8))
// console.log(isSumEqual([1, 2, 4, 4], 8))


/*2)Напишите функцию, которая преобразует глубокий массив в одномерный. Не используйте array.flat()
Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]*/
function makeArrFlat (arr) {
    return arr.join().split(',')
}
//console.log (makeArrFlat([1, 2, [3, 4, [5]]]));


/*3)Напишите функцию, которая разделяет массив на части заданного размера.
Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]*/
function takeArrParts(arr, size) {
    const partedArr = [];

    for (let i = 0; i < arr.length; i +=size) {
        partedArr.push(arr.slice(i, size + i));
    }
    return partedArr;
}
// console.log (takeArrParts([1, 2, 3, 4, 5], 2));


/*4)Напишите функцию, которая поверхностно сравнивает два объекта.
Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true */

const isArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const compared = arr1.map((el, id) => arr2[id] === el);
    return !compared.includes(false);
};
