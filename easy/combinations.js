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

const combinations = (n, k, index, combination, allComb) => {
    if (index === k) {
        allComb.push([...combination]);
        return;
    }


    let start;
    if (index === 0) {
        start = 1;
    } else {
        start = combination[index - 1] + 1;
    }

    for (let i = start; i <= n; i += 1) {
        combination[index] = i;
        combinations(n, k, index + 1, combination, allComb);
    }
};
const combs = [];
const combination = Array.from({ length: k });

combinations(n, k, 0, combination, combs);

combs.forEach(element => {
    print(element.join(' '));
});