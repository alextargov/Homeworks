/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const num = +gets();
const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fact(n - 1);
};

const output = fact(2*num)/(fact(num+1)*fact(num));

print(Math.round(output));
