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
    '5f4d3s2a1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const msg = gets();
const len = msg.length;
let output = '';
for(let i = len - 1; i >= 0; i -= 1) {
    if( (msg[i] >= 'A' && msg[i] <= 'Z') ||
        (msg[i] >= 'a' && msg[i] <= 'z')) {
        output += msg[i];
    }
}

print(output);