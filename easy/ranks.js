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
    '0 -5 4 -11 1'
];


const gets = this.gets || getGets(test);
const print = this.print || console.log;

const merge = (left, right) => {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(left[i]);
            i += 1;
        } else {
            result.push(right[j]);
            j += 1;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i += 1;
    }

    while (j < right.length) {
        result.push(right[j]);
        j += 1;
    }

    return result;
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const middle = (arr.length / 2) | 0;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
};



const length = +gets();
let arr = gets().split(' ').map(Number);
const output = Array.from({ length: length });
const map = new Map();

arr = mergeSort(arr);

arr.forEach((value, index) => {
    map.set(value, index + 1);
})

let i = 0;
map.forEach((value, key) => {
    output[i] = value;
    i += 1;
});

print(output.join(' '));
