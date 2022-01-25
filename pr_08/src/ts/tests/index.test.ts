import { decodeMorse, encodeMorse } from '../index';

describe('DECODING from morse to ASCII string', () => {
    test('VALID data: existing morse sentence', () => {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toEqual('HEY JUDE');
    });
    test('VALID data: expecting special word SOS', () => {
        expect(decodeMorse('...---...')).toEqual('SOS');
    });
    test('VALID data: expecting numbers 123 123', () => {
        expect(decodeMorse('.---- ..--- ...--   .---- ..--- ...--')).toEqual('123 123');
    });
    test('VALID data: expecting symbols "@!? +some"', () => {
        expect(decodeMorse('.--.-. -.-.-- ..--..   .-.-. ... --- -- .')).toEqual('@!? +SOME');
    });

    test('INVALID data: existing morse sentence with one undefined symbol "*"', () => {
        expect(decodeMorse('.... . -.-- *   .--- ..- -.. .')).toEqual('HEY JUDE');
    });
    test('INVALID data: not a morse sentence"HEY JUDE"', () => {
        expect(decodeMorse('HEY JUDE')).toEqual('Invalid input data!');
    });
    test('INVALID data: empty string ""', () => {
        expect(decodeMorse('')).toEqual('Invalid input data!');
    });
    test('INVALID data: undefined input', () => {
        expect(decodeMorse(undefined)).toEqual('Invalid input data!');
    });
});

describe('ENCODING from ASCII string to morse', () => {
    test('VALID data: uppercase string', () => {
        expect(encodeMorse('HEY JUDE')).toEqual('.... . -.--   .--- ..- -.. .');
    });
    test('VALID data: lowercase string', () => {
        expect(encodeMorse('hey Jude')).toEqual('.... . -.--   .--- ..- -.. .');
    });
    test('VALID data: special word SOS', () => {
        expect(encodeMorse('SOS')).toEqual('... --- ...');
    });
    test('VALID data: numbers 123 123', () => {
        expect(encodeMorse('123 123')).toEqual('.---- ..--- ...--   .---- ..--- ...--');
    });
    test('VALID data: symbols "@!? +some"', () => {
        expect(encodeMorse('@!? +some')).toEqual('.--.-. -.-.-- ..--..   .-.-. ... --- -- .');
    });
    test('VALID data: string with one undefined symbol"*"', () => {
        expect(encodeMorse('HEY* JUDE')).toEqual('.... . -.--    .--- ..- -.. .');
    });

    test('INVALID data: empty string ""', () => {
        expect(encodeMorse('')).toEqual('Invalid input data!');
    });
    test('INVALID data: undefined input', () => {
        expect(encodeMorse(undefined)).toEqual('Invalid input data!');
    });
    test('INVALID data: undefined symbol"*"', () => {
        expect(encodeMorse('*')).toEqual('');
    });
});