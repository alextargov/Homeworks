/* eslint-disable */
let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;
/* eslint-enable */
const sayHello = (name) => {
    print(`Hello, ${name}!`);
};
const name = gets();
sayHello(name);
