import caesarCipher from "./caesar-cipher";

describe('caesarCipher', () => {

    test('shifts letters +3 and wraps', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('shifts letters +3 with capitals', () => {
        expect(caesarCipher('ABC', 3)).toBe('DEF');
    });
    
});