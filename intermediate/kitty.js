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
    'x@@xx@*',
    '1 -1 -1 4',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const path = gets().split('');
const steps = gets().split(' ').map(Number);

let souls = 0;
let deadlocks = 0;
let foods = 0;
let jumps = 0;
let deadlocked = false;
let start = 0;

if (path[0] === '*') {
    foods += 1;
    path[0] = '0';
} else if (path[0] === '@') {
    souls += 1;
    path[0] = '0';
}

for (let i = 0; i < steps.length; i += 1) {
    if (path[0] === 'x') {
        deadlocked = true;
        break;
    }
    jumps += 1;
    if (steps[i] === '0') {
        continue;
    }
    if (steps[i] > 0) {
        start = (start + steps[i]) % path.length;
    } else {
        start = path.length - start - 1;
        start = (start - steps[i]) % path.length;
        start = path.length - start - 1;
    }

    if (path[start] === '*') {
        foods += 1;
        path[start] = '0';
    } else if (path[start] === '@') {
        souls += 1;
        path[start] = '0';
    } else if (path[start] === 'x') {
        deadlocks += 1;
        if (start % 2 === 0) {
            if (souls > 0) {
                path[start] = '@';
                souls -= 1;
            } else {
                deadlocked = true;
                break;
            }
        }
        if (start % 2 !== 0) {
            if (foods > 0) {
                path[start] = '*';
                foods -= 1;
            } else {
                deadlocked = true;
                break;
            }
        }
    }
}

if (deadlocked) {
    print('You are deadlocked, you greedy kitty!');
    print('Jumps before deadlock: ' + jumps);
} else {
    print('Coder souls collected: ' + souls);
    print('Food collected: ' + foods);
    print('Deadlocks: ' + deadlocks);
}
