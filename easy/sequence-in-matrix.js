/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */

// let line = gets();
// let size = line.split(' ');
// const rows = +size[0];
// const cols = +size[1];
// const matrix = [];
let inRow = '';
let inCol = '';
let inDiagonal = '';
let inBackwardDiagonal = '';
let inForwardDiagonal = '';
let counterRow = 1;
let counterCol = 1;
let counterDiagonal = 1;
let counterBackwardDiagonal = 1;
let counterForwardDiagonal = 1;

// for (let i = 0; i < rows; i += 1) {
//     line = gets();
//     size = line.split(' ');
//     matrix[i] = size;
//     for (let j = 0; j < cols; j += 1) {
//         matrix[i][j] = +size[j];
//     }
// }
const rows = 17;
const cols = 13;
const matrix = [
    '-288123 450661 -946326 -43781 -795461 -916583 92951 46106 253384 -738473 -313052 490796 -533861',
    '-205863 800781 690869 478465 44395 -493827 52760 507661 -358758 253384 239893 659007 -913139',
    '-795853 646257 995562 -479675 640414 650386 -656883 107347 766336 242328 253384 -64599 -197899',
    '272018 -939418 -179971 856593 191428 681617 -183690 262791 871167 293633 -596644 253384 894085',
    '524671 -516568 678370 -229249 342306 -556947 -573896 -676629 378028 293633 -283545 152476 253384',
    '-929189 514573 239154 -961441 678249 145449 -857416 -723345 -369750 293633 -754351 -283545 296871',
    '868019 985084 202702 -415708 -336889 -308812 -401929 218482 63751 293633 -156644 -672429 -283545',
    '-881915 286025 -416488 105282 751592 697283 -622204 505244 607294 293633 976492 419513 796113',
    '-342558 362717 665278 750157 -358500 379677 523635 -198296 -798190 293633 809963 -570083 685701',
    '-715154 511995 219373 -772637 822176 347975 579908 689347 685801 961345 -261636 370381 723156',
    '391516 -715154 -707763 49093 140206 -466273 891737 649264 89396 -104625 432274 -315628 952140',
    '-468097 350259 -715154 51939 172544 348886 -890954 -44206 151 -955900 -927135 407836 -254155',
    '-293332 -824308 775151 -715154 560278 742262 112470 -965208 332589 164610 581415 -604487 -663631',
    '555455 947550 -927099 477651 -715154 -642255 754114 -108329 -487630 -653002 -760793 -252693 -400166',
    '-589998 815498 902153 -144415 883561 -715154 649782 666529 579225 -690986 389375 4976 632930',
    '736829 739818 733204 956757 -472291 548439 898901 997431 -866069 -241822 309919 -442213 -904745',
    '624908 482529 -619052 -299112 288404 173789 -33102 494358 -932785 519314 373108 985159 -600865',
];
for (let i = 0; i < rows; i += 1) {
        matrix[i] = matrix[i].split(' ');
    }
const arrRows = [];
const arrCols = [];
const arrDiagonals = [];
const arrBackwardDiagonals = [];
const arrForwardDiagonals = [];

let maxRows = 0;
let maxCols = 0;
let maxDiagonals = 0;
let maxBackwardDiagonals = 0;
let maxForwardDiagonals = 0;

for (let i = 0; i < rows; i += 1) {
    counterCol = 1;
    counterRow = 1;
    for (let j = 0; j < cols; j += 1) {
        if (inRow === matrix[i][j]) {
            counterRow += 1;
            arrRows.push(counterRow);
        } else {
            counterRow = 1;
            inRow = matrix[i][j];
        }
        // if (inCol === matrix[j][i]) {
        //     counterCol += 1;
        //     arrCols.push(counterCol);
        // } else {
        //     counterCol = 1;
        //     inCol = matrix[j][i];
        // }
        if (i === j) {
            if (inDiagonal === matrix[i][j]) {
                counterDiagonal += 1;
                arrDiagonals.push(counterDiagonal);
            } else {
                counterDiagonal = 1;
                inDiagonal = matrix[i][j];
            }
        }
    }
}

for (let j = 0; j < cols; j += 1) {
    counterCol = 1;
    for (let i = 0; i < rows; i += 1) {
        if (inCol === matrix[i][j]) {
            counterCol += 1;
            arrCols.push(counterCol);
        } else {
            counterCol = 1;
            inCol = matrix[i][j];
        }
    }
}

const numDiagonals = rows + cols - 1;
const backwardDiagonals = Array.from({
    length: numDiagonals,
}, () => Array.from({
    length: 0,
}, () => ''));

for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
        backwardDiagonals[i + j].push(matrix[i][j]);
    }
}

for (let i = 0; i < numDiagonals; i += 1) {
    inBackwardDiagonal = backwardDiagonals[i][0];
    counterBackwardDiagonal = 1;
    for (let j = 1; j < backwardDiagonals[i].length; j += 1) {
        if (inBackwardDiagonal === backwardDiagonals[i][j]) {
            counterBackwardDiagonal += 1;
            arrBackwardDiagonals.push(counterBackwardDiagonal);
        } else {
            counterBackwardDiagonal = 1;
            inBackwardDiagonal = backwardDiagonals[i][j];
        }
    }
}

const forwardDiagonals = Array.from({
    length: numDiagonals,
}, () => Array.from({
    length: 0,
}, () => ''));

for (let i = 0; i < rows; i += 1) {
    for (let j = cols - 1; j >=0; j -= 1) {
        forwardDiagonals[Math.abs(j - (i+2))].push(matrix[i][j]);
    }
}

for (let i = 0; i < numDiagonals; i += 1) {
    inForwardDiagonal = forwardDiagonals[i][0];
    counterForwardDiagonal = 1;
    for (let j = 1; j < forwardDiagonals[i].length; j += 1) {
        if (inForwardDiagonal === forwardDiagonals[i][j]) {
            counterForwardDiagonal += 1;
            arrForwardDiagonals.push(counterForwardDiagonal);
        } else {
            counterForwardDiagonal = 1;
            inForwardDiagonal = forwardDiagonals[i][j];
        }
    }
}

//console.log(diagonals + ' ' + Math.max(...arrBackwardDiagonals));

maxRows = Math.max(...arrRows);
maxCols = Math.max(...arrCols);
maxDiagonals = Math.max(...arrDiagonals);
maxBackwardDiagonals = Math.max(...arrBackwardDiagonals);
maxForwardDiagonals = Math.max(...arrForwardDiagonals);
//console.log(maxRows + ' ' + maxCols + ' ' + maxDiagonals + ' ' + maxBackwardDiagonals + ' ' + maxForwardDiagonals);
print(Math.max(maxRows, maxCols, maxDiagonals, maxBackwardDiagonals, maxForwardDiagonals));