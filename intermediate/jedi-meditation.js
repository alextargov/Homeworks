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
    7,
    'P4 P2 P3 M1 K2 P1 K1'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

const num = +gets();
const arrJedi = gets().split(' ');
const masters = [];
const knights = [];
const padawans = [];

for (let i = 0; i < num; i += 1) {
    const jedi = arrJedi[i];
    if (jedi.charAt(0) === 'M') {
        masters.push(jedi);
    } else if (jedi.charAt(0) === 'K') {
        knights.push(jedi);
    } else {
        padawans.push(jedi);
    }
}

print(masters.concat(knights, padawans).toString().replace(/,/g, ' '));
