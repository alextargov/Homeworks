/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const x = +gets();
const y = +gets();

if(x === 0 && y === 0) {
    print(0);
}

if(y === 0 && x !== 0) {
    print(6);
}

if(x === 0 && y !== 0) {
    print(5);
}

if(x > 0 && y > 0) {
    print(1);
}

if(x < 0 && y > 0) {
    print(2);
}

if(x < 0 && y < 0) {
    print(3);
}

if(x > 0 && y < 0) {
    print(4);
}
