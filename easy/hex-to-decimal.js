/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const hex = gets().split('').reverse();

const hexDec = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
};
let sum = 0;

for (let i = hex.length - 1; i >= 0; i -= 1) {
    let currSymb = hex[i];
    sum += (hexDec[currSymb]*Math.pow(16, i));
}

print(sum);
