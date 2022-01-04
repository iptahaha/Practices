//practice_2_13.12.21

//1.Написать функцию, выводящую в консоль числа от 1 до n (где n — это целое число),
// которая функция принимает в качестве параметра, с такими условиями:
// вывод three вместо чисел, кратных 3;
// вывод five вместо чисел, кратных 5;
// вывод threeFive вместо чисел, кратных как 3, так и 5.
function YourFuncName(x) {
    for (let i = x; i > 0; i--) {
        if (i%3 === 0 && i%5 === 0) {
            console.log('threeFive');
        } else if (i%3 === 0) {
            console.log('three');
        }else if (i%5 === 0) {
            console.log('five');
        } else {
            console.log(i);
        }
    }
}
//YourFuncName(15);

//2.Нужно выйти из цикла, изменив только две отмеченные строки.
// Результат в консоли сейчас останавливается на 19  19. Должен на 15  14.
for (let i = 0; i <= 15; i++) { //! В этой строке (i<20) => (i<=15)
    for (let j = 0; j < 20; j++) {
        if (i === 15 && j === 15) {
            j = j - 1; break//! В этой строке написано новое выражение
        }
        console.log(i, j);
    }
}

//3. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами,
// причем регистр букв не имеет значения. Учитываются лишь символы;
// пробелы или знаки препинания в расчет не берутся.
function isAnagram(a, b) {
    a = a.replace(/[^a-zа-яё]/gi, '');//Убираются лишние символы, которые не берутся в расчёт
    b = b.replace(/[^a-zа-яё]/gi, '');
    let strA = a.toLowerCase().split('').sort().join('');
    let strB = b.toLowerCase().split('').sort().join('');
    if (strA === strB) {
        console.log ('This is anagram');
    } else {
        console.log('This is NOT anagram');
    }
}
// isAnagram('Ложа папы', 'Жола Пыпа');//This is anagram
// isAnagram('Бла бла бла!!!', 'Бла бла бла');//This is anagram
// isAnagram('Бла бла бла', 'ля ля ля');//This is NOT anagram