import capitalize from "./capitalize";

describe('capitalize', () => {

    test('capitalizes the first letter of a lowercase word', () => {
        expect(capitalize('jack')).toBe('Jack');
    });

    test('capitalizes a single character word', () => {
        expect(capitalize('a')).toBe('A');
    });
    
    test('handles strings that are already capitalized', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });

    test('handles non-alphabetic characters correctly', () => {
        expect(capitalize('123abc')).toBe('123abc');
    });
});