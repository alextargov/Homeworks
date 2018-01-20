/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const num = gets().toString();

const reverseNumber = (number) => {
    return number.split('').reverse().join('');
};

print(reverseNumber(num));
