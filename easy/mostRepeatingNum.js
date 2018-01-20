// const solve = (args) => {
//     const len = args[0]*1;
//     const arr = [];
//     let max = arr[0];
//     let key = 0;

//     for (let i = 1; i <= len; i += 1) {
//         if (arr.hasOwnProperty(args[i])) {
//             arr[args[i]*1] += 1;
//         } else { 
//             arr[args[i]] = 1;
//         }
//     }

//     for (let i = 0; i < arr.length; i += 1) {
//         if (max === 'undefined') max = 0;
//         if (max < arr[i]) {
//             max = arr[i];
//             key = i;
//         }
//     }
//     console.log(`${key} (${max} times)`);
// };

// solve(['13', '4', '9', '1', '9', '9', '3', '4', '4', '1', '3', '3', '3', '3']);

/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const len = gets() * 1;
const arr = [];
const tempArr = [];
let max = arr[0];
let key = 0;

for (let i = 0; i < len; i += 1) {
    tempArr[i] = gets();
}

for (let i = 0; i < len; i += 1) {
    if (arr.hasOwnProperty(tempArr[i])) {
        arr[tempArr[i] * 1] += 1;
    } else {
        arr[tempArr[i]] = 1;
    }
}

for (let i = 0; i < arr.length; i += 1) {
    if (max === undefined) max = 0;
    if (max < arr[i]) {
        max = arr[i];
        key = i;
    }
}

print(`${key} (${max} times)`);
