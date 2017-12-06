/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

let line = gets();
line = line.split(' ');
const a = line[0];
const b = line[1];
const min = Math.min(a, b);
const maxDividers = [];

for (let i = 0; i <= min; i += 1) {
    if (a % i === 0 && b % i === 0) {
        console.log(i);
        maxDividers.push(i);
    }
}

print(Math.max(...maxDividers));
