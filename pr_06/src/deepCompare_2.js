//2) Напишите функцию, которая делает глубокое сравнение объектов.
//Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

function isEqualDeep(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }

    let propertiesInA = 0, propertiesInB = 0;
    for (let property in a) {
        propertiesInA += 1;
    }
    for (let property in b) {
        propertiesInB += 1;
        if (!(property in a) || !isEqualDeep(a[property], b[property])) {
            return false;
        }
    }
    return propertiesInA === propertiesInB;
}

module.exports = {isEqualDeep};