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
    '3 2',
];


const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, k] = gets().split(' ').map(Number);

const combsWithRep = (n, k, index, comb) => {
    if (k === index) {
        print(comb.join(' '));
        return;
    }

    let start;
    if (index === 0) {
        start = 1;
    } else {
        start = comb[index - 1];
    }

    for (let i = start; i <= n; i += 1) {
        comb[index] = i;
        combsWithRep(n, k, index + 1, comb);
    }
}

const combination = Array.from({ length: k });
combsWithRep(n, k, 0, combination);