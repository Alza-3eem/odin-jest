export default function caesarCipher(str, shift) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    shift = shift % 26

    return str.split('').map(char => {
        if (lowerAlphabet.includes(char)) {
            const index = lowerAlphabet.indexOf(char)
            const newIndex = (index + shift + 26) % 26
            return lowerAlphabet[newIndex]
        } else if (upperAlphabet.includes(char)) {
            const index = upperAlphabet.indexOf(char)
            const newIndex = (index + shift + 26) % 26
            return upperAlphabet[newIndex]
        } else {
            return char
        }
    }).join('')
}