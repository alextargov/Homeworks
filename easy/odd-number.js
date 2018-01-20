/* eslint-disable */
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
    21,
    -9223372036854775808,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
    9223372036854775807,
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const map = new Map();
const n = +gets();

for (let i = 0; i < n; i += 1) {
    let number = gets();
    number = number.toString();
    if (map.has(number)) {
        const counter = map.get(number);
        print(counter);
        map.set(number, counter + 1);
    } else {
        map.set(number, 1);
    }
}

print(map);

for (const [key, value] of map) {
    if (value % 2 !== 0) {
        print(key);
    }
}
