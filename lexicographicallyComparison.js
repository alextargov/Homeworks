const solve = (args) => {
    const arg1 = args[0];
    const arg2 = args[1];

    if (arg1 < arg2) {
        console.log('<');
    } else if (arg1 === arg2) {
        console.log( '=');
    } else {
        console.log( '>');
    }
};
