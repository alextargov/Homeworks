/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const number = +gets();
let output = '';

for (let i = 1; i <= number; i += 1) {
    if (!(i % 7 === 0 || i % 3 === 0)) {
        output += i + ' ';
    }
}

print(output.trim());
