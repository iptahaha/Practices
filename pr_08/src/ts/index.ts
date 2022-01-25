import {MorseSymbol, intervals, fullMorseVars} from './utils';

function decodeMorse(code: string) {
    if (code === undefined || code === '' || !(/.-/).test(code))
        return 'Invalid input data!';
    else
        return code.split(intervals.morseWordSpace).map(word =>
            word.split(intervals.morseSymbolSpace).map(makeSymbolFromLetter).join('')).join(intervals.morseSymbolSpace);
}

function makeSymbolFromLetter(symbol: string) {
    let found: MorseSymbol | undefined = fullMorseVars.find(value => value.symbol == symbol);

    if (found === undefined)
        return '';
    else
        return found.translation;
}

function encodeMorse(text: string) {
    if (text === undefined || text === '')
        return 'Invalid input data!';
    else
        return text.split('').map(makeLetterFromSymbol).reduce(function (accumulator, currentValue) {
            return isMorseWordSpace(currentValue) || isAccumulatorMorseWordSpace(accumulator)
                ? `${accumulator}${currentValue}`
                : `${accumulator}${intervals.morseSymbolSpace}${currentValue}`;
        });
}

function makeLetterFromSymbol(letter: string) {
    if (letter === intervals.wordSpace)
        return intervals.morseWordSpace;

    if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
        letter = letter.toUpperCase();
    }

    let found: MorseSymbol | undefined = fullMorseVars.find(value => value.translation == letter);

    if (found === undefined)
        return '';
    else
        return found.symbol;
}

function isMorseWordSpace(value: string) {
    return value === intervals.morseWordSpace;
}

function isAccumulatorMorseWordSpace(accumulator: string) {
    return accumulator.substring(accumulator.length - intervals.morseWordSpace.length) === intervals.morseWordSpace;
}

export {decodeMorse, encodeMorse}