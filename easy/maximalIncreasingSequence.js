/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const len = +gets();
const curr = [];
let temp = [];
for (let i = 0; i < len; i += 1) {
    curr[i] = +gets();
}
temp = [...curr];
let sub;
let count = 1;
let max = 1;

for (let i = 1; i < len; i += 1) {
    sub = 1 * curr[i] - 1 * temp[i - 1];
    if (sub > 0) {
        count += 1;
        if (count > max) {
            max = count;
        }
    } else {
        count = 1;
    }
}
// console.log('...'.repeat(10));

print(max);
