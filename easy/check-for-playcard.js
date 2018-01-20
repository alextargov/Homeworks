/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const input = gets();

if (cards.indexOf(input) >= 0) {
    print(`yes ${input}`);
} else {
    print(`no ${input}`);
}
