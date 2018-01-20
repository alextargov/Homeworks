/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const num = +gets();
const arr = [];

for (let i = 1; i <= num; i += 1) {
    arr.push(i);
}

const getPermutations = (array) => {
    const generatePermutations = (index, perm, visited, values, all) => {
        if (index === values.length) {
            all.push([...perm]);
            return;
        }

        for (const value of values) {
            // check for visited and continue;
            if (visited[value]) {
                continue;
            }
            perm[index] = value;
            // mark value as visited;
            visited[value] = true;
            generatePermutations(index + 1, perm, visited, values, all);

            // mark value as visited;
            visited[value] = false;
        }
    };

    const permutations = [];

    generatePermutations(0, [], {}, array, permutations);

    return permutations;
};

getPermutations(arr).forEach((permutation) => print(permutation.toString().replace(/,/g, ' ')));