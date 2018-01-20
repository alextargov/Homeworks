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
    '529',
    '8 17 31 7 22 25 22 18 17 4 22 31 16 18 19 6 28 18 27 31 31 24 22 16 2 12 14 7 27 29 22 10 27',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const desiredSum = +gets();
const arr = gets().split(' ');
const length = arr.length;


const isSubsetSum = (set, n, sum) => {
    // Base Cases
    const subset = Array.from({
        length: n + 1,
    });
    for (let i = 0; i < n + 1; i += 1) {
        subset[i] = Array.from({
            length: sum + 1
        });
    }

    for (let i = 0; i <= n; i += 1) {
        subset[i][0] = true;
    }

    for (let i = 1; i <= sum; i += 1) {
        subset[0][i] = false;
    }


    for (let i = 1; i <= n; i += 1) {
        for (let j = 1; j <= sum; j += 1) {
            if (j < set[i - 1]) {
                subset[i][j] = subset[i - 1][j];
            }

            if (j >= set[i - 1]) {
                subset[i][j] = subset[i - 1][j] || subset[i - 1][j - set[i - 1]];
            }
        }
    }

    return subset[n][sum];
};

if (isSubsetSum(arr, length, desiredSum)) {
    print('yes');
} else {
    print('no');
}
