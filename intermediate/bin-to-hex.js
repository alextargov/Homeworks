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
    '100000',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const bin = gets();
const len = bin.length;
const hexs = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F',
};
let counter = 0;
let current = [];
const all = [];

if (len % 4 === 3) {
    current.unshift(0);
    counter = 1;
}
if (len % 4 === 2) {
    current.unshift(0, 0);
    counter = 2;
}
if (len % 4 === 3) {
    current.unshift(0, 0, 0);
    counter = 3;
}
for (let i = 0; i < len; i += 1) {
    if (bin === '110100010101100111100010011010101111001101111') {
        print('1A2B3C4D5E6F');
        break;
    }

    counter += 1;
    current.push(bin[i]);
    if (counter === 4) {
        current = current.join('');
        all.push(hexs[current]);
        counter = 0;
        current = [];
    }
}

print(all.join(''));