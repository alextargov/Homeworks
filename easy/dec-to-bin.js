/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const dec = +gets();

let division = dec;
let modules = dec;
const arr = [];

while(true) {
    modules = division % 2;
    division /= 2;
    division = Math.floor(division);
    arr.push(modules);
    if(division === 0) {
        break;
    }
}

print(arr.reverse().join(''));