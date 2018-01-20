/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const n = +gets();
const k = +gets();

const fact = (i) => {
    if (i === 0 || i === 1) {
        return 1;
    }

    return i * fact(i - 1);
};

print(Math.round(fact(n) / fact(k)));
