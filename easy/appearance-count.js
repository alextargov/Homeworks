/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const length = +gets();
const numbers = gets().split(' ').map(Number);
const num = +gets();
let counter = 0;

for (let i = 0; i < length; i += 1) {
    if (numbers[i] === num) {
        counter += 1;
    }
}

print(counter);