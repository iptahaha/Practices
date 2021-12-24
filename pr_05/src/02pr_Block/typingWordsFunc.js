//1.Написать функцию, выводящую в консоль числа от 1 до n (где n — это целое число),
// которая функция принимает в качестве параметра, с такими условиями:
// вывод three вместо чисел, кратных 3;
// вывод five вместо чисел, кратных 5;
// вывод threeFive вместо чисел, кратных как 3, так и 5.
function typingWordsFunc(x) {
    if (x === '' || typeof x !== 'number') {
        return 'Invalid input data';
    }
    let result = '';
    if (x === 0) {
        return '0';
    }
    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            result = result.concat('three ');
        } else if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive ');
        } else if (i % 3 !== 0 && i % 5 === 0) {
            result = result.concat('five ');
        } else {
            result = result.concat(`${i} `);
        }
    }
    return result;
}

module.exports = {typingWordsFunc};