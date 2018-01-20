/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

const dimentions = gets().split(' ');
let sum = 0;
let maxSum = 0;
const matrix = [];

const moveRight = +dimentions[0] - 3;
const moveDown = +dimentions[1] - 3;

for (let row = 0; row < +dimentions[0]; row += 1) {
    matrix[row] = gets().split(' ');
    for (let col = 0; col < +dimentions[1]; col += 1) {
        matrix[row][col] = +matrix[row][col];
        // Get the first 3x3 matrix in order to start the comparison later on;
        if (row < 3 && col < 3) {
            maxSum += matrix[row][col];
        }
    }
}

for (let i = 0; i <= moveRight; i += 1) {
    for (let j = 0; j <= moveDown; j += 1) {
        for (let row = 0; row < 3; row += 1) {
            for (let col = 0; col < 3; col += 1) {
                // Sum the current matrix;
                // If i > 0, the 3x3 matrix will move right;
                // If j > 0, the 3x3 matrix will move down;
                sum += matrix[row+i][col+j];
            }
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
        sum = 0;
    }
}

print(maxSum);
