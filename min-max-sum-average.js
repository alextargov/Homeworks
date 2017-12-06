/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const numbers = +gets();
const arr = [];
let max;
let min;
let average;
let sum = 0;
sum = +sum.toFixed(2);
let num;

for (let i = 0; i < numbers; i += 1) {
    num = +gets();
    num = +num.toFixed(2);
    sum += num;
    sum = +sum.toFixed(2);
    arr.push(num);
}

max = (Math.max(...arr)).toFixed(2);
min = (Math.min(...arr)).toFixed(2);
average = (sum/numbers).toFixed(2);
print(`min=${min}`);
print(`max=${max}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${average}`);
