const {breakingCycleFunc} = require('../breakingCycleFunc');

test('breakingCycleFunc() VALID', () => {
    expect(breakingCycleFunc()).toBe('15 14');
});