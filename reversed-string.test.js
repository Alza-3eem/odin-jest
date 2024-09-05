import reverseString from "./reversed-string";

describe('reversedString', () => {

    test('reverses a string of medium length', () => {
        expect(reverseString('jack')).toBe('kcaj');
    });

    test('reverses a string of long length', () => {
        expect(reverseString('communist')).toBe('tsinummoc');
    });

    test('reverses a string of with letters and numbers', () => {
        expect(reverseString('abc123')).toBe('321cba');
    });

    test('reverses a string of two characters', () => {
        expect(reverseString('Be')).toBe('eB');
    });
    
});