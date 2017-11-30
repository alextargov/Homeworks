const solve = (args) => {
    let N = args[0];
    const elem = args.slice(1);
    for (let i in elem) {
        elem[i] * 1;
    }
    const result = elem.sort((x, y) => (x - y)).forEach((x) => console.log(x));
};

solve(['10', '36', '4', '1', '18', '38', '31', '20', '30', '20']);
