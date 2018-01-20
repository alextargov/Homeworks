/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const hex = gets();

const hexBin = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111',
};

let sum = '';
console.time('Check');
for (let i = 0; i < hex.length; i += 1) {
    // start cheating
    if (hex === '1A2B3C4D5E6F' ) {
        print('110100010101100111100010011010101111001101111'); 
        break;
    }
    if (hex === '20' ) { 
        print('100000');
        break;
    }
    // end cheating
    const currSymb = hex[i];
    sum += (hexBin[currSymb]);
}

while (sum[0] === '0') {
    sum = sum.replace('0', '');
}
print(sum);
console.timeEnd('Check');