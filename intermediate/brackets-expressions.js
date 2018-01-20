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
    '2{z10{xy}}',
];


const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Stack {
    constructor() {
        this.arr = [];
    }
    push(val) {
        this.arr.push(val);
    }
    pop() {
        return this.arr.pop();
    }
}

const stack = new Stack();

const exp = gets();
let counter = 0;
for(const char of exp) {
    if (char === '{') {
        stack.push(counter);
    }
    if(char === '}') {
        const pop = stack.pop();
        print(exp.slice(pop, counter + 1));
    }
    counter += 1;
}

