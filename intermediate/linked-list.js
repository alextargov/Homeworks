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
    let counter = 0;
    while (current) {
        if (counter === index) {
            for (let i = values.length -1; i >= 0; i -= 1) {
                const node = new Node(values[i]);
                node.next = current.next;
                current.next = node;
                this.length += 1;
            }
            break;
        }
        counter += 1;
        current = current.next;
    }
};

LinkedList.prototype.at = function(index, value = null) {
    let current = this.head;
    let counter = 0;

    while (current) {
        if (counter === index && value) {
            current.value = value;
        } else if (counter === index) {
            return current.value;
        }
        counter += 1;
        current = current.next;
    }
};

LinkedList.prototype.removeAt = function(index) {
    const current = this.head;

    for (let i = 0; i < index - 1; i +=1) {
        current = current.next;
    }

    const tempNode = current.next;
    const value = tempNode.value;
    current.next = tempNode.next;
    this.length -= 1;
    return value;
};

const list = new LinkedList();
// list.append(5, 6, 8);
list.append(4, 9, 8);
list.print();
console.log(list.removeAt(1) + 'ggggggggggg');
console.log('--'.repeat(10));
list.print();
console.log(list.length);

