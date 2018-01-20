/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const n = +gets();
const first = gets().split(' ').map((x) => Number(x));
const second = gets().split(' ').map((x) => Number(x));
const output = [];
for(let i = 0; i < n; i += 1) {
    output.push(first[i] + second[i]);
}

print(output.join(' '));