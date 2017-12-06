/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const desiredSum = +gets();
const arr = gets().split(' ');
const length = arr.length;
let sum = 0;
let flag = false;

for (let i = 0; i < length; i += 1) {
    sum = +arr[i];
    for (let n = 0; n < length; n += 1) {
        //
        if (i === n) continue;
        if (sum < desiredSum) {
            sum += +arr[n];
        }
        if (sum > desiredSum) {
            sum -= +arr[n];
        }

        if (sum === desiredSum) {
            flag = true;
            break;
        }
    }
    if (flag) {
        break;
    }
}
print(flag);
print(flag ? 'yes' : 'no');
