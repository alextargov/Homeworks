/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const num1 = +gets();
const num2 = +gets();
const num3 = +gets();
const arr = [];
arr.push(num1, num2, num3);
const nth = +gets();

//print(arr);
let numbers = 0;
let i = 3;
while(arr.length < nth) {
    let temp = arr[i - 3] + arr[i - 2] + arr[i - 1];
    arr.push(temp);
    i += 1;
}

print(arr);


function addition(a, b, acc = '', carry = 0) {
  if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');

  carry = carry + (Math.floor(a).pop() + Math.floor(b).pop());
  acc = carry % 10 + acc;
  carry = carry > 9;

  return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
  if (a === '0' && b === '0') return '0';
  return addition(a.split(''), b.split(''));
}