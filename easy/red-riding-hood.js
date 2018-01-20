const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = `5
4 5 1 3 0
1 2
5 1
4 5
3 2`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor(elements) {
        this._nodes = new Map();
        this._coins = Array.from({
            length: elements,
        });
        this.maxMoney = Array.from({ length: elements + 1 }, (el) => 0);
    }

    addEdge(from, to, coins) {
        this._addUndirectedEdge(from, to, coins);
    }

    _addUndirectedEdge(from, to, coins) {
        const coinFrom = this._coins[from - 1];
        const coinTo = this._coins[to - 1];
        if (!this._nodes.has(from)) {
            this._nodes.set(from, {
                coins: coinFrom,
                children: [],
            });
        }

        this._nodes.get(from).children.push(to);

        if (!this._nodes.has(to)) {
            this._nodes.set(to, {
                coins: coinTo,
                children: [],
            });
        }
        this._nodes.get(to).children.push(from);
    }

    dfs(vertex, used) {
        const vertexData = this._nodes.get(vertex);
        
        this.maxMoney[vertex] += vertexData.coins;
        vertexData.children.forEach((child) => {
            if (child === used) {
                return;
            }
            const node = this._nodes.get(child);
            this.maxMoney[child] = this.maxMoney[vertex];
            this.dfs(child, vertex);
        });

    }

}
const elements = +gets();
const coins = gets().split(' ').map(Number);

const graph = new Graph(elements);
graph._coins = [...coins];

for (let i = 0; i < elements - 1; i += 1) {
    const input = gets().split(' ').map(Number);
    graph.addEdge(input[0], input[1]);
}
const set = new Set();
graph._nodes.forEach((value, key) => {
    graph.dfs(key, 0);
    set.add(Math.max(...graph.maxMoney));
    graph.maxMoney = graph.maxMoney.map((n) => n = 0);

});
print(Math.max(...set.values()));
