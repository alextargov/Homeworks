const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = `10
(5 <- 11)
(1 <- 8)
(11 <- 3)
(8 <- 7)
(1 <- 5)
(11 <- 2)
(8 <- 6)
(2 <- 15)
(8 <- 4)`.split('\n');


const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor(nodes) {
        this._nodes = new Map();
        this.endingNodes = new Set();
        this._crossroad = new Set();
        this.tillCrossroad = [];
        this._maxPath = [];
        this.max = 0;
        this.currPath = 0;
    }

    addEdge(from, to) {
        this._processEdge(from, to);
    }

    _processEdge(from, to) {
        if (!this._nodes.has(from)) {
            this._nodes.set(from, []);
        }
        this._nodes.get(from).push(to);

        if (!this._nodes.has(to)) {
            this._nodes.set(to, []);
        }

        this._nodes.get(to).push(from);
    }

    getMaxPath() {
        this._getSingleNodes();
        print(this.endingNodes);
        this.endingNodes.forEach((element) => {
            this.currPath = element;
            this._triggerMaxPath(element, -1);

        });
    }

    _triggerMaxPath(current, used) {
        const element = this._nodes.get(current);

        if (this._crossroad.has(current)) {
            //print(current);
            this.tillCrossroad.push(this.currPath);
            this.currPath = 0;
        }

        let singleNodeLen = 0;
        element.forEach((v) => {
            if (this.endingNodes.has(v)) {
                singleNodeLen += 1;
            }
        });

        element.forEach((vertex) => {
            if (vertex === used) {
                return;
            }
            //print(this.tillCrossroad);
            this.currPath += vertex;

            if (this.endingNodes.has(vertex)) {

                let total = 0;
                this.tillCrossroad.forEach((el) => total += el);
                if (this.max < total + this.currPath) {
                    this.max = total + this.currPath;
                }
                this.currPath = 0;
                singleNodeLen -= 1;
                if (singleNodeLen === 0) {
                    this.tillCrossroad.pop();
                }
            }

            //print(this.currPath);
            this._triggerMaxPath(vertex, current);
        })
    }

    _getSingleNodes() {
        this._nodes.forEach((el, key) => {
            if (this._nodes.get(key).length === 1) {
                this.endingNodes.add(key);
            }
            if (this._nodes.get(key).length > 2) {
                this._crossroad.add(key);
            }
        });
    }
}


// ------------------------

const nodes = +gets();
const graph = new Graph(nodes);
for (let i = 1; i < nodes; i += 1) {
    const input = gets().split(' ');
    const parent = +input[0].slice(1);
    const child = +input[2].slice(0, input[2].length - 1);
    graph.addEdge(parent, child);
}

graph.getMaxPath();
print('--------')
print(graph.max);