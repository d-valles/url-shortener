let alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
let base = alphabet.length;

function encode(num) {
    let encoded = '';
    while (num) {
        let reminder = num % base;
        num = Math.floor(num / base);
        encoded = alphabet[reminder].toString() + encoded;
    }
    return encoded;
}

function decode(str) {
    let decoded = 0;
    while (str) {
        let index = alphabet.indexOf(str[0]);
        let pow = str.length - 1;
        decoded += index * (Math.pow(base, pow));
        str = str.substring(1);
    }
    return decoded;
}

export default {
    encode,
    decode
}