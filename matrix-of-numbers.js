/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const num = +gets();
const matrix = [];
let arr = [];
for (let row = 1; row <= num; row += 1) {
    arr = [];
    for (let col = row; col < num + row; col += 1) {
        arr.push(col);
    }
    //print(arr.toString().replace(/,/g, ' '));
    print(arr.join(' '));
}
