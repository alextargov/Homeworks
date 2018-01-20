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
let temp = 0;
let line = '';
for (let row = 0; row <= n; row += 1) {
    for (let col = 0; col < 2 * n; col += 1) {
        if (row === 0 || row === n) continue;
        if (n - row === col) {
            line += '*';
        } else {
            line += '.';
        }
        if (col === 2 * n - 1) {
            line = line.split('');
            line.splice(2*n - 1, 1, '*');
            line = line.join('');
        }
    }
    if (row === 0) {
        while (temp < n) {
            line += '.';
            temp += 1;
        }
        while (temp < 2*n) {
            line += '*';
            temp += 1;
        }
    }
    if (row === n) {
        while (temp < 2*n) {
            line += '*';
            temp += 1;
        }
    }
    print(line);
    line = '';
    temp = 0;
}