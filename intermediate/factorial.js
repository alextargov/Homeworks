/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const num = 100;

const multiply = function (x, f, resSize) {
    let carry = 0;

    for (let i = 0; i < resSize; i += 1) {
        let prod = f[i] * x + carry;
        f[i] = prod % 10;
        carry = prod / 10;
    }

    while (carry) {
        f[resSize] = carry % 10;
        carry = carry / 10;
        resSize += 1;
    }

    return resSize;
}

const factorial = function (n) {
    const f = Array.from({length: 100 });
    f[0] = 1;
    let resSize = 1;
    for (let i = 2; i <= n; i += 1) {
        resSize = multiply(i, f, resSize);
    }

    for(let i = resSize - 1; i >= 0; i -= 1) {
        print(f[i]);
    }
}

print(factorial(num));