/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const n = +gets();
let devisor = 1;
let counter = 1;
let sum = 0;

while (true) {
    devisor = n;
    devisor /= Math.pow(5, counter);
    if (devisor >= 1) {
        sum += Math.floor(devisor);
        counter += 1;
    } else {
        break;
    }
}

print(sum);
