/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const bin = gets().split('').reverse();
let sum = 0;

for (let i = bin.length - 1; i >= 0; i -= 1) {
    sum += (+bin[i])*Math.pow(2, i);
}

print(sum);