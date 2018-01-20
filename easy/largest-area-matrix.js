const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test =
    `5 6
1 3 2 2 2 4
3 3 3 2 4 4
4 3 1 2 3 3
4 3 1 3 3 1
4 3 3 3 1 1`.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const search = (matrix, row, col, calculate) => {
    let result = 1;
    calculate[row][col] = true;

    if ((row - 1 >= 0) && (matrix[row - 1][col] == matrix[row][col]) && !calculate[row - 1][col]) {
        result += search(matrix, row - 1, col, calculate);
    }
    if ((row + 1 < rows) && (matrix[row + 1][col] == matrix[row][col]) && !calculate[row + 1][col]) {
        result += search(matrix, row + 1, col, calculate);
    }
    if ((col - 1 >= 0) && (matrix[row][col - 1] == matrix[row][col]) && !calculate[row][col - 1]) {
        result += search(matrix, row, col - 1, calculate);
    }
    if ((col + 1 < cols) && (matrix[row][col + 1] == matrix[row][col]) && !calculate[row][col + 1]) {
        result += search(matrix, row, col + 1, calculate);
    }
    return result;
}

const [rows, cols] = gets().split(' ').map(Number);
let bestCount = 0;
let indexRow = 0;
let indexCol = 0;
let count = 0;
let calculate = Array.from({
    length: rows
}, (el) => []);

const matrix = Array.from({
    length: rows,
});

for (let row = 0; row < rows; row += 1) {
    const get = gets().split(' ').map(Number);
    matrix[row] = [...get];
}

for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
        if (!calculate[row][col]) {
            count = search(matrix, row, col, calculate);
            if (bestCount < count) {
                bestCount = count;
                indexRow = row;
                indexCol = col;
            }
            
        }
        
    }
}
print(bestCount);
