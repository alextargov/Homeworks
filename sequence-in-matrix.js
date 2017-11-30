/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

let line = gets();
let size = line.split(' ');
const rows = +size[0];
const cols = +size[1];
const matrix = [];
let inRow;
let inCol;
let inDiagonal;
let counterRow = 1;
let counterCol = 1;
let counterDiagonal = 1;
let counterUnderDiagonal = 1;

for (let i = 0; i < rows; i += 1) {
    line = gets();
    size = line.split(' ');
    matrix[i] = size;
    for (let j = 0; j < cols; j += 1) {
        matrix[i][j] = +size[j];
    }
}

const arrRows = [];
const arrCols = [];
const arrDiagonals = [];
const arrUnderDiagonals = [];
let maxRows = 0;
let maxCols = 0;
let maxDiagonals = 0;
let maxUnderDiagonals = 0;

for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
        if (inRow === matrix[i][j]) {
            counterRow += 1;
            arrRows.push(counterRow);
        } else {
            counterRow = 1;
            inRow = matrix[i][j];
        }
        if (inCol === matrix[j][i]) {
            counterCol += 1;
            arrCols.push(counterCol);
        } else {
            counterCol = 1;
            inCol = matrix[j][i];
        }
        if (i === j) {
            if (inDiagonal === matrix[i][j]) {
                counterDiagonal += 1;
                arrDiagonals.push(counterDiagonal);
            } else {
                counterDiagonal =1;
                inDiagonal = matrix[i][j];
            }
        }
    }
    for (let j = 0; j <= rows; j+=1) {
        underDiagonalSum+= matrix[i][j];
    }
}

maxRows = Math.max(...arrRows);
maxCols = Math.max(...arrCols);
maxDiagonals = Math.max(...arrDiagonals);

print(Math.max(maxRows, maxCols, maxDiagonals));

// for (let i = 0; i < rows; i += 1) {
//     for (let j = 0; j < cols; j += 1) {
//         if (inCol === matrix[j][i]) {
//             counterCol += 1;
//         } else {
//             counterCol = 1;
//             inCol = matrix[j][i];
//         }
//     }
// }

// for (let i = 0; i < rows; i += 1) {
//     for (let j = 0; j < cols; j += 1) {
//         if (i === j) {
//             if (inDiagonal === matrix[i][j]) {
//                 counterDiagonal += 1;
//             } else {
//                 counterDiagonal =1;
//                 inDiagonal = matrix[i][j];
//             }
//         }
//     }
// }

// for (let i = 0; i < rows; i += 1) {
//     for (let j = 0; j < cols; j += 1) {
        
//     }
// }

//console.log(`counterRow = ${arrRows} counterCol = ${counterCol} counterDiagonal = ${counterDiagonal}`);

