const {myBind} = require('../myBind_5');

const testObj = {
    a: 'hohoho',
    getA: function () {
        return this.a;
    }
}

describe('Task_5: write your own bind-function', function () {

    test('get number is true', function () {
        expect(myBind()).toBe(false);
    })
    test('get number is true', function () {
        expect(myBind(testObj.getA, testObj)()).toEqual('hohoho');
    })
    test('get number is true', function () {
        expect(myBind(testObj.getA, 'test')()).toEqual(undefined);
    })
    test('result undefined', function () {
        expect(myBind(testObj.getA)()).toEqual(undefined);
    })
})