const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = 
`14 9
3 1
5 7
5 1
11 4
10 4
11 1
10 5
11 5
2 10`.split('\n');

console.log(test);
// const test = [
//     '11 9',
//     '8 4',
//     '8 9',
//     '5 4',
//     '5 10',
//     '5 3',
//     '7 9',
//     '7 1',
//     '10 2',
//     '1 3',
// ];

// const test = [
//     '5 5',
//     '0 3',
//     '2 1',
//     '1 4',
//     '1 3',
//     '4 3',
// ];

// const test = [
//     '8 3',
//     '0 7',
//     '0 4',
//     '7 4',
// ];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor(verticesCount) {
        this._nodes = new Map();
        this._incomings = new Map();
        this._allActions = new Set();

        for (let i = 0; i < verticesCount; i += 1) {
            this._nodes.set(i, []);
        }
    }

    addEdge(from, to) {
        if (!this._nodes.has(from)) {
            this._nodes.set(from, []);
        }

        if (!this._incomings.has(to)) {
            this._incomings.set(to, 0);
        }

        if (!this._incomings.has(from)) {
            this._incomings.set(from, 0);
        }

        this._incomings.set(to, this._incomings.get(to) + 1);

        this._nodes.get(from).push(to);

        this._allActions.add(from);
        this._allActions.add(to);
    }

    _remove(best, usedElements) {
        usedElements.add(best);

        if (!this._nodes.has(best)) {
            return;
        }

        this._nodes.get(best).forEach((element) => {
            this._incomings.set(element, this._incomings.get(element) - 1);
        });
    }

    _getBest(usedElements) {
        const vertices = [];

        for (const [vertex, count] of this._incomings) {
            if (count > 0 || usedElements.has(vertex)) {
                continue;
            }
            vertices.push(vertex);
        }
        return vertices.map(Number).sort((a, b) => a > b)[0];
    }

    getResult(actions) {
        const result = [];
        const usedElements = new Set();
        const actionsCount = actions;
        while (true) {
            const best = this._getBest(usedElements);

            if (best === undefined) {
                break;
            }
            const curr = result[result.length - 1];

            for (let i = 0; i < best; i += 1) {
                if (actions <= 0) {
                    break;
                }
                if (!this._allActions.has(i) && !result.includes(i)) {
                    result.push(i);
                    actions -= 1;
                }

            }

            for (let i = curr; i < best; i += 1) {
                if (actions <= 0) {
                    break;
                }
                if (!this._allActions.has(i) && !result.includes(i)) {
                    result.push(i);
                    actions -= 1;
                }

            }
            result.push(best);
            this._remove(best, usedElements);
        }
        return result;
    }
}

const [actions, obligatory] = gets().split(' ').map(Number);
const graph = new Graph(actions);

for (let i = 0; i < obligatory; i += 1) {
    const edge = gets().split(' ').map(Number);
    graph.addEdge(edge[0], edge[1]);
}

graph.getResult(actions).forEach((el) => print(el));