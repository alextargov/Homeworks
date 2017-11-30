/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const length = +gets();
const arr = [];
let currMax = 0;
let max = 0;

for (let i = 0; i < length; i += 1) {
    arr[i] = +gets();
}


for (let i = 0; i < length; i += 1) {
    currMax = Math.max(0, currMax + arr[i]);
    max = Math.max(currMax, max);
}

print(max);
