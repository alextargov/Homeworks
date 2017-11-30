/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const length = +gets();
const k = +gets();
const arr = [];
let sum = 0;

for (let i = 0; i < length; i += 1) {
    arr[i] = 1 * gets();
}

arr.sort((x, y) => y - x);

for (let i = 0; i < k; i += 1) {
    sum += arr[i];
}

print(sum);
