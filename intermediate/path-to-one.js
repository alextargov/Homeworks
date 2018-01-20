/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */


class Tree {
    constructor() {
        this.root = null;
    }
    findBFS(data) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node.data === data) {
                return node;
            }
            for (let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        return null;
    }
    add(data, toNodeData) {
        const node = new Node(data);
        const parent = toNodeData ? this.findBFS(toNodeData) : null;
        if (parent) {
            parent.children.push(node);
        } else {
            if (!this.root) {
                this.root = node;
            } else {
                return 'Root node is already assigned';
            }
        }
    }
    printByLevel() {
        if (!this.root) {
          return console.log('No root node found');
        }
        const newline = new Node('\n');
        const queue = [this.root, newline];
        let string = '';
        while (queue.length) {
          const node = queue.shift();
          string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
          if (node === newline && queue.length) {
            queue.push(newline);
          }
          for (let i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
          }
        }
        console.log(string.trim());
    }

    prints() {
        if (!this.root) {
            return console.log('No root node found');
        }
        const newline = new Node('|');
        const queue = [this.root, newline];
        let string = '';
        while (queue.length) {
            const node = queue.shift();
            string += `${node.data.toString()} `;
            if (node === newline && queue.length) {
                queue.push(newline);
            }
            for (let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        console.log(string.slice(0, -2).trim());
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}
let n = 1501;
const tree = new Tree();
let i = 16;
let counter = 0;
const allOps = [];

tree.add(n);
let up = n;
let down = n;
let devideUp = n;
let devideDown = n;
let nUp = n;
let nDown = n;
while (i >= 0) {
    if (nUp === 1 || nDown === 1) {
        allOps.push(counter);
        counter = 0;
    }
    if (nUp % 2 === 0) {
        devideUp = nUp / 2;
        tree.add(devideUp, nUp);
        nUp = devideUp;
    } else {
        up = nUp + 1;
        tree.add(up, nUp);
        nUp += 1;
    }

    if (nDown % 2 === 0) {
        devideDown = nDown / 2;
        tree.add(devideDown, nDown);
        nDown = devideDown;
    } else {
        down = nDown - 1;
        tree.add(down, nDown);
        nDown -= 1;
    }
    
    counter += 1;
    i -= 1;
    
}

print(tree.prints());
print(tree.printByLevel());
print(allOps);
// class Stack {
//     constructor() {
//         this.arr = [];
//         this.top = -1;
//     }

//     push(val) {
//         this.top += 1;
//         this.arr.push(val);
//     }
//     peek() {
//         return this.arr[this.top];
//     }
//     pop() {
//         this.top -= 1;
//         return this.arr.pop();
//     }
// }

// const stack = new Stack();
// const count = [];
// let n = 34;
// let N = n;
// stack.push(n);

// let counter = 0;
// let operations = 0;
// let increment = true;
// let decrement = false;
// const all = [];
// let i = 10;

// while (i >= 0) {
//     n = stack.peek();
//     if(n === 1) {
//         all.push(operations);
//         operations = 0;
//         n = N;
//         increment = !increment;
//         decrement = !decrement;
//         i -= 1;
//         //break;
//     }
//     operations += 1;
//     if (n % 2 === 0) {
//         n /= 2;
//         //if(n === 1) break;
//         stack.push(n);
//     } else {
//         counter += 1;
//         if(increment) {
//             n += 1;
//             count
//             stack.push(n);
//             if(n <= 1) {
//                 increment = false;
//                 decrement = true;
//                 while(counter >= 0) {
//                     stack.pop();
//                     counter -= 1;
//                     operations -= 1;
//                 }
//             }
//         }
//         if(decrement) {
//             n -= 1;
//             stack.push(n);
//             if(n <= 1) {
//                 increment = true;
//                 decrement = false;
//                 while(counter >= 0) {
//                     stack.pop();
//                     counter -= 1;
//                     operations -= 1;
//                 }
//             }
//         }
//     }
// }
//print(stack.peek());
//print(all);
//print(Math.min(...all));




// let num = n;
// let count = 0;
// const arr = [];
// while(!(num === 1)) {
//     if(num % 2 === 0) {
//         num /= 2;
//     } else {
//         num += 1;
//     }
//     count += 1;
// }
// arr.push(count);
// count = 0;
// num = n;

// while(!(num === 1)) {
//     if(num % 2 === 0) {
//         num /= 2;
//     } else {
//         num -= 1;
//     }
//     count += 1;
// }
// arr.push(count);

// print(Math.min(...arr));