class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
}

LinkedList.prototype.append = function(...values) {
    for (let i = 0; i < values.length; i += 1) {
        const node = new Node(values[i]);
        let current = this.head;
        if (!current) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length += 1;
    }
};

LinkedList.prototype.prepend = function(...values) {
    for (let i = 0; i < values.length; i += 1) {
        const node = new Node(values[i]);
        node.next = this.head;
        this.head = node;
        this.length += 1;
    }
};

LinkedList.prototype.print = function() {
    let current = this.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
};

LinkedList.prototype.insert = function(index, ...values) {
    let current = this.head;
    let counter = 1;
    while (current) {
        if (counter === index) {
            
            for (let i = 0; i < values.length; i += 1) {
                console.log(`counter = ${counter} || index = ${index} current = ${current.value} length = ${this.length}`);
                const node = new Node(values[i]);
                current.next = current;
                current = node;
                this.length += 1;
                console.log(`counter = ${counter} || index = ${index} current = ${current.value} length = ${this.length}`);
            }
            break;
        }
        counter += 1;
        current = current.next;
    }
}

const list = new LinkedList();
// list.append(5, 6, 8);
list.append(4, 9, 8);
list.insert(2, 10);
// list.prepend(66);
//console.log(list);
list.print();
