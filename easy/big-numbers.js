/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const lengths = '3 4'.split(' ').map(Number);
const arr1 = '9 9 9'.split(' ').map(Number);
const arr2 = '9 9 9 9'.split(' ').map(Number);
const maxLength = Math.max(...lengths);
const output = Array.from({
    length: maxLength,
}).fill(0);
let tenth = false;

for (let i = 0; i < maxLength; i += 1) {
    if (typeof arr1[i] === 'undefined') {
        arr1[i] = 0;
    }
    if (typeof arr2[i] === 'undefined') {
        arr2[i] = 0;
    }
    if (arr1[i] + arr2[i] + output[i] >= 10) {
        output[i] += arr1[i] + arr2[i] - 10;
        output[i + 1] = 1;
    } else {
        output[i] += arr1[i] + arr2[i];
    }
}


print(output.join(' '));