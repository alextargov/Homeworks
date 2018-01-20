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
    'ADD 5',
    'ADD 1',
    'FIND',
    'ADD 2',
    'FIND',
    'ADD 3',
    'ADD 1',
    'FIND',
    'ADD 3',
    'FIND',
    'EXIT',
];

// const test = [
//     'ADD -28716',
//     'ADD 22150',
//     'ADD 822',
//     'ADD -32140',
//     'ADD 6087',
//     'FIND',
//     'ADD -31230',
//     'FIND',
//     'EXIT',
// ];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.counter = 0;
        this.arr = [];
        this.dfsArr = [];
        this.startIndex = 0;
    }

    push(val) {
        const root = this.root;
        this.counter += 1;

        if (!root) {
            this.root = new Node(val);
            return;
        }

        let curr = root;
        const newNode = new Node(val);

        while (curr) {
            if (val <= curr.value) {
                if (!curr.left) {
                    curr.left = newNode;
                    break;
                } else {
                    curr = curr.left;
                }
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    break;
                } else {
                    curr = curr.right;
                }
            }
        }
    }
}

const bst = new BinarySearchTree();
let ancestor;

const find = (node) => {
    if (!node) {
        return null;
    }
    let cand = find(node.left);

    if (cand) {
        return cand;
    }
    if (bst.startIndex - 1 < ((bst.counter / 2) | 0) - 1) {
        ancestor = node;
    }
    if (bst.startIndex === ((bst.counter / 2) | 0)) {
        return [node, ancestor];
    }
    bst.startIndex += 1;
    return find(node.right);
};

let command;

while (command = gets()) {

    bst.startIndex = 0;
    let value;
    let med;
    let ancestors;
    command = command.split(' ');

    if (command[0] === 'EXIT') {
        break;
    }

    if (command[0] === 'ADD') {
        value = +command[1];
        bst.push(value);
    }

    if (command[0] === 'FIND') {
        med = find(bst.root);
        if (bst.counter === 2 && bst.root.left) {
            print((bst.root.value + bst.root.left.value) / 2);
            continue;
        } else if (bst.counter === 2 && bst.root.right) {
            print((bst.root.value + bst.root.right.value) / 2);
            continue;
        }

        if (bst.counter % 2 === 0) {
            print((med[1].value + med[0].value) / 2);
        } else {
            print(med[0].value);
        }
    }
    bst.dfsArr = [];
}

