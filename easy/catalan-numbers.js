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
    '20',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const num = +gets();
const fact = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fact(n - 1);
};
const a = fact(num);
const b = (num+1)*a;

const output = fact(2*num)/(b*a);

print(Math.round(output));
