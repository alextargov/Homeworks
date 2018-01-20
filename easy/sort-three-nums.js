/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const a = +gets();
const b = +gets();
const c = +gets();

if (a > b && a > c) {
    if (b > c || b === c) {
        print(a + ' ' + b + ' ' + c);
    }
    if (c > b) {
        print(a + ' ' + c + ' ' + b);
    }
    if (a === b) {
        print(a + ' ' + b + ' ' + c);
    }
    if (a === c) {
        print(a + ' ' + c + ' ' + b);
    }
}

if (b > a && b > c) {
    if (a > c || a === c) {
        print(b + ' ' + a + ' ' + c);
    }
    if (c > a) {
        print(b + ' ' + c + ' ' + a);
    }
    if (b === a) {
        print(b + ' ' + a + ' ' + c);
    }
    if (b === c) {
        print(b + ' ' + c + ' ' + a);
    }
}

if (c > a && c > b) {
    if (a > b || a === b) {
        print(c + ' ' + a + ' ' + b);
    }
    if (b > a) {
        print(c + ' ' + b + ' ' + a);
    }
    if (c === a) {
        print(c + ' ' + a + ' ' + b);
    }
    if (c === b) {
        print(c + ' ' + b + ' ' + a);
    }
}
if (a === b && b === c) {
    print(a + ' ' + b + ' ' + c);
}