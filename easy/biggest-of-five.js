/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

const arr = [];
arr.push(a, b, c, d, e);
print(Math.max(...arr));

// if (a > b && a > c && a > d && a > e) {
//     print(a);
// }
// if (b > a && b > c && b > d && b > e) {
//     print(b);
// }
// if (c > a && c > b && c > d && c > e) {
//     print(c);
// }
// if (d > a && d > b && d > c && d > e) {
//     print(d);
// }
// if (e > a && e > b && e > c && e > d) {
//     print(e);
// }
