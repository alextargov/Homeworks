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
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let line = [];
let temp = 0;
for (let row = 0; row < 2 * n - 1; row += 1) {
    for (let col = 0; col < n; col += 1) {
        if (row === col) {
            line.push('*');
        } else {
            line.push('.');
        }
    }
    if(row < n ) {
        temp += 1;
    } else {
        temp -= 1;
    }
    if (row >= n) {
        line[temp - 1] = '*';
    }
    print(line.join(''));
    line = [];
}
// row = 4 col = 2
// row = 5 col = 1
// row = 6 col = 0