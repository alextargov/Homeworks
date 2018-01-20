const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = `14 9
3 1
5 7
5 1
11 4
10 4
11 1
10 5
11 5
2 10`.split('\n');


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
        this.nodes = [];
        this.sources = new Set();

        for (let i = 0; i < verticesCount; i += 1) {
            this.nodes.push({
                parents: 0,
                children: [],
            });

            // mark all vertices as potential sources
            this.sources.add(i);
        }
    }

    addEdge(from, to) {
        this.nodes[from].children.push(to);
        this.nodes[to].parents += 1;

        // to has an incoming edge, so it cannot be source...
        this.sources.delete(to);
    }

    getSorted() {
        // Save the result
        const path = [];

        while (this.sources.size > 0) {
            // Get the minimal source, by order 0, 1, 2, 3, 4, 5, 6, ....
            const source = Math.min(...this.sources);

            // Remove it from sources
            this.sources.delete(source);
            path.push(source);

            // Remove all edges outgoing of **source**
            for (const child of this.nodes[source].children) {
                // Update the prant
                this.nodes[child].parents -= 1;

                // **child** is a source (there are no incoming edges)
                if (this.nodes[child].parents === 0) {
                    this.sources.add(child);
                }
            }
        }

        return path;
    }
}

const [actions, obligatory] = gets().split(' ').map(Number);
const graph = new Graph(actions);

for (let i = 0; i < obligatory; i += 1) {
    const edge = gets().split(' ').map(Number);
    graph.addEdge(edge[0], edge[1]);
}

print(graph.getSorted())
