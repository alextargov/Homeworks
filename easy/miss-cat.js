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
    '1',
    '3',
    '3',
    '7',
    
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const people = +gets();
const map = new Map();
const arr = [];
let max = 0;
for (let i = 0; i < people; i += 1) {
    const vote = +gets();
    arr.push(vote);
    if (!map.has(vote)) {
        map.set(vote, 1);
    } else {
        const currVotes = map.get(vote);
        map.set(vote, currVotes + 1);
    }
}

const maxValues = [];
const maxKeys = [];
map.forEach((value, key) => {
    if (value > max) {
        max = value;
        maxValues.push(value);
        maxKeys.push(key);
    }
});


print(maxKeys[maxKeys.length - 1]);
