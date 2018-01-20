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
    '1 3 -6 7 4 1 12',
    '3',
    '1 -1',
    '1 3 -2',
    '1 2 -3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let rowCount = 0;
let result = '';

while (true) {
    rowCount += 1;
    const input = gets();
    if (input === 'end') {
        print(result);
        break;
    }

    const start = +input;
    const end = +gets();
    const sequence = gets();

    const startIndex = getIndex(start, sequence.length);
    const endIndex = getIndex(end, sequence.length);
    const step = rowCount % 2 === 0 ? 4 : 3;

    for (let i = startIndex; i <= endIndex; i += step) {
        result += sequence[i];
    }
}

const getIndex = (index, length) => {
    if (index < 0) {
        index = length + index;
    }

    return index;
};