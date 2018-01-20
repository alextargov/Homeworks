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
    '427 13',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);

const stack = [];
stack.push(n);
let counter = 0;
let mth = 0;

for (let i = 1; i < m; i += 1) {
    counter += 1;
    if(counter === 1) {
        stack.push(stack[mth] + 1);
    }
    if (counter === 2) {
        stack.push(stack[mth]*2 + 1);
    }
    if (counter === 3) {
        stack.push(stack[mth] + 2);
        counter = 0;
        mth += 1;
    }
}
print(stack[stack.length - 1]);