const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '996655 99',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ');
print(input)
let num = input[0].split('');
let k = +input[1];

for (let i = 0; i < num.length / 2; i += 1) {
    [num[i], num[num.length - 1 - i]] = [num[num.length - 1 - i], num[i]]
}
num = +num.join('');
const divison = num / k;
const modulo = num % k;

print((divison + modulo) | 0);