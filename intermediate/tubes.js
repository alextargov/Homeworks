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
    '4',
    '11',
    '803',
    '777',
    '444',
    '555',
];


const gets = this.gets || getGets(test);
const print = this.print || console.log;

const tubes = +gets();
const friends = +gets();
const tubesSizes = [];
let maxTube = 0;
let result = -1;

for (let i = 0; i < tubes; i += 1) {
    tubesSizes[i] = +gets();
    if (maxTube < tubesSizes[i]) {
        maxTube = tubesSizes[i];
    }
}

let left = 1;
let right = maxTube;
let middle = ((left + right) / 2 ) | 0;

while (left <= right) {
    let temp = 0;

    for (let j = 0; j < tubesSizes.length; j += 1) {
        temp += (tubesSizes[j] / middle) | 0;
    }

    if (temp < friends) {
        right = middle - 1;
    } else if (temp >= friends) {
        left = middle + 1;
        result = middle;
    }

    middle = ((left + right) / 2 ) | 0;
}

print(result);
