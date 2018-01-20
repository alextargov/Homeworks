const number = '1122';
const length = number.length;

const allPos = [];
let counter = 0;
let temp;
const rec = (numberr, iter) => {
    if (iter === 1) return;
    while (counter < iter) {
        temp = numberr.slice(counter, iter);
        allPos.push(temp);
        counter += 1;
    }
    counter = 0;
    rec(number, iter - 1);
};

allPos.push(number[0]);
rec(number, length);
print(allPos);