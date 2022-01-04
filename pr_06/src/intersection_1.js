//1) Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
//Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

function intersection (obj1, obj2) {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return 'Incorrect input data';
    }

    const  result = {};
    for (let prop in obj1) {
        if (obj2.hasOwnProperty(prop) && obj2[prop] === obj1[prop]) {
            result[prop] = obj1[prop];
        }
    }
    return result;
}

module.exports = {intersection};