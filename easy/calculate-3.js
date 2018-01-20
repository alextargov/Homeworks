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
  '3',
  '2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const generateCombinationsWithoutRep = (n, k, index, combination) => {
    if (index === k) {
        counter += 1;
        return;
    }

    const start = index ? combination[index - 1] + 1 : 1;

    for (let i = start; i <= n; i += 1) {
        combination[index] = i;
        generateCombinationsWithoutRep(n, k, index + 1, combination);
    }
};

const n = +gets();
const k = +gets();
const combination = Array.from({ length: k });
let counter = 0;
generateCombinationsWithoutRep(n, k, 0, combination);
print(counter);