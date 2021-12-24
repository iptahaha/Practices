const getNumericalSum = require('../getNumericalSum');

test('getNumericalSum("string", number%3 %5 %15)', () => {
    expect(getNumericalSum('100', 15)).toBe(85);
});

test('getNumericalSum("string", number%3)', () => {
    expect(getNumericalSum('100', 6)).toBe(106);
});

test('getNumericalSum("string", number%5)', () => {
    expect(getNumericalSum('100', 25)).toBe(125);
});
