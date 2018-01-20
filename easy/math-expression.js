const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test =
    `0.123456
    1.234567
    2.345678`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const m = +gets();
const p = +gets();


const up = ((n*n) + (1 / (m * p)) + 1337);
const down = n - (128.523123123 * p);
const sin = Math.sin((m % 180));

const result = (up/down) + sin;
print(+result.toFixed(6));
print(up);
print(down);
print(sin);
// 1337.360558/-301.3504063 + 0.7145038242148849