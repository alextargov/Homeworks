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
    '256 768',
];


const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [start, end] = gets().split(' ').map((el) => Number(el));

const isGood = (i, n) => {
    while (n > 0) {
        if (i % (n % 10) === 0 || n % 10 === 0) {
            n = (n / 10) | 0;
        } else {
            return false;
        }
    }
    return true;
};

let result = 0;
for (let i = start; i <= end; i += 1) {
    if (isGood(i, i)) {
        result += 1;
    }
}
print(result);