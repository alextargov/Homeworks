/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const a = +gets();
const b = +gets();
const c = +gets();

if (a > 0 && b > 0 && c > 0) {
    print('+');
}

if (a < 0 && b < 0 && c < 0) {
    print('-');
}

if (a === 0 || b === 0 || c === 0) {
    print('0');
}

if (a < 0 && b > 0 && c > 0) {
    print('-');
}
if (a > 0 && b < 0 && c > 0) {
    print('-');
}
if (a > 0 && b > 0 && c < 0) {
    print('-');
}

if (a < 0 && b < 0 && c > 0) {
    print('+');
}
if (a < 0 && b > 0 && c < 0) {
    print('+');
}
if (a > 0 && b < 0 && c < 0) {
    print('+');
}
