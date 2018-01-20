const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '5',
    '4 3 2 5 2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const len = +gets();
const numbers = gets().split(' ').map(Number);
let prodEven = numbers[0];
let prodOdd = numbers[1];
for (let i = 2; i < len; i += 1) {
    if (i % 2 === 0) {
        prodEven *= numbers[i];
    } else {
        prodOdd *= numbers[i];
    }
}

if (prodEven === prodOdd) {
    print(`yes ${prodEven}`);
} else {
    print(`no ${prodEven} ${prodOdd}`);
}
