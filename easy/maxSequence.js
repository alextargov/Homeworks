/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const numbers = +gets();
const arr = [];

for (let i = 0; i < numbers; i += 1) {
    arr[i] = +gets();
}
let temp = arr[0];
let counter = 1;
let max = 1;

for (let i = 1; i < numbers; i+=1) {
    if (temp === arr[i]) {
        counter += 1;
        if (counter > max) {
            max = counter;
        }
    } else {
        if (counter > max) {
            counter += 1;
            max = counter;
        }
        counter = 1;
    }
    temp = arr[i];
}

max = Math.max(counter, max);
print(max);


