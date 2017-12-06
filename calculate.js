/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const number = +gets();
const x = +gets();
let sum = 1;
let multi = 1;
let divider = 1;
let all;

for (let i = 1; i <= number; i += 1) {
    multi *= i;
    divider = Math.pow(x, i);
    all = multi/divider;
    sum += all;
}

sum = sum.toFixed(5);

print(sum);

