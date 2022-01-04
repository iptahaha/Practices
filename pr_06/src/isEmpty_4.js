//4) Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
// Ожидаемый результат: ({}) => true,
// ({ a: undefined }) => true,
// ({ a: 1 }) => false

function isEmpty (object) {
    if(typeof object !== 'object') {
        return 'Incorrect input data';
    }
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
        return true;
    }

    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
}

module.exports = {isEmpty};