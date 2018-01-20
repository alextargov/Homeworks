/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const type = gets();
const value = gets();

if (type === 'integer') {
    print(+value + 1);
} else if (type === 'real') {
    print((+value + 1).toFixed(2));
} else {
    print(value + '*');
}
