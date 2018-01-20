/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const dec = +gets();

const hexs = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
}
let modules = dec;
let division = dec;
const arr = [];

while (true) {
    modules = division % 16;
    division /= 16;
    division = Math.floor(division);
    arr.push(hexs[modules]);
    if (division === 0) {
        break;
    }
}

print(arr.reverse().join(''));