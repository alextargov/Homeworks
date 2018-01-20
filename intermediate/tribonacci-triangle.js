/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

// const num1 = +gets();
// const num2 = +gets();
// const num3 = +gets();
const lines = 5;
const arr = [];
//arr.push(num1, num2, num3);
// const fact = (n) => {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * fact(n - 1);
// };
// const numbers = fact(lines);
let line = '';
let temp = 1;
for(let i = 1; i <= lines; i += 1) {
    line = '';
    for(let j = temp; j < temp + i; j += 1) {
        line += j + ' ';
        
    }
    temp = i + i;
    print(line);
    //console.log(temp + '------');
}