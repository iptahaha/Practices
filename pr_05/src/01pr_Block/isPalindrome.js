//1.
function isPalindrome(str) {
    if (str !== '') {
        let strOfChar = str.toLowerCase().split(' ').join('');//
        let isPalindrome = false;
        for (let i=0; i<strOfChar.length; i++) {
            isPalindrome = strOfChar[i] === strOfChar[strOfChar.length - 1 - i];
        }
        return isPalindrome;
    }
    return 'Incorrect input data';
}
module.exports = {isPalindrome};
