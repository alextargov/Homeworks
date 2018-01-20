/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const number = '1222';
const cipher = 'A1B12C11D2';
const length = number.length;

let map = new Map();
let letter;
let digits = [];
let i = 0;

while (i < cipher.length) {
    if (cipher[i] >= 'A' && cipher[i] <= 'Z') {
        digits = [];
        letter = cipher[i];
        i += 1;
        continue;
    }
    while (cipher[i] >= 0 && cipher[i] <= 9) {
        digits.push(cipher[i]);
        i += 1;
    }
    map.set(letter, digits.join('')); 
}
map = new Map([...map.entries()].sort());
print(map);

let temp;
let start = 0;

const recursion = (numbers, iter) => {
    if (iter === 1) {
        return;
    }
    let i = 0;
    let arr = [];
    map.forEach((value, key) => {
        const inNumber = numbers[i];
        const inMap = map.get(key);
        if (numbers.includes(inMap, i)) {
            arr.push(key);//print(arr);
            let length = inMap.length;
            i += length;
        } else {
            arr = [];
            return;
        }
    });
    recursion(numbers, iter - 1);
};
recursion(number, length);

i = 0;
let arr = [];
map.forEach((value, key) => {
    const inNumber = number[i];
    const inMap = map.get(key);
    print(inMap + ' ' + inNumber);
    if (number.includes(inMap, i)) {
        arr.push(key);       
        const len = inMap.length;
        i += len;
    } else {
        i += 1;
    }
    
});
print(arr);
// const allPos = [];
// let counter = 0;
// let temp;
// const rec = (numberr, iter) => {
//     if (iter === 1) return;
//     while (counter < iter) {
//         temp = numberr.slice(counter, iter);
//         allPos.push(temp);
//         counter += 1;
//     }
//     counter = 0;
//     rec(number, iter - 1);
// };

// allPos.push(number[0]);
// rec(number, length);
// print(allPos);