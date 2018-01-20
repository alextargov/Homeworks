/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

let a = +gets();
let b = +gets();
let temp;

if (a > b) {
    temp = a;
    a = b;
    b = temp;
    print(a + ' ' + b );
} else if (b > a) {
    temp = b;
    b = a;
    a = temp;
    print(b + ' ' + a);
} else if (a === b) {
    print(a + ' ' + b);
}
