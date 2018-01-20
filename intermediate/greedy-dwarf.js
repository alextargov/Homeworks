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

const valley = gets().split(' ').map(Number);
let numPatterns = +gets();
let coinSum = 0;

const processPattern = (val, pattern) => {
    const visited = Array.from({ length: pattern.length }).fill(false);
    visited[0] = true;
    let sum = val[0];
    let position = 0;

    while (true) {
        for (let i = 0; i < pattern.length; i += 1) {
            const next = position + pattern[i];
            if (next && !visited[next]) {
                sum += val[next];
                visited[next] = true;
                position = next;
            } else {
                return sum;
            }
        }
    }
};

const outputs = [];

while (numPatterns > 0) {
    const pattern = gets().split(' ').map(Number);
    const sum = processPattern(valley, pattern);
    outputs.push(sum)
    numPatterns -= 1;
}
;
print(outputs);

