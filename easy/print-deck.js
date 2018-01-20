/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const sign = gets();
const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const endPos = deck.indexOf(sign);

for (let i = 0; i <= endPos; i += 1) {
    print(`${deck[i]} of spades, ${deck[i]} of clubs, ${deck[i]} of hearts, ${deck[i]} of diamonds`);
}
