
const add = (x) => x + 1;
const multiply = (x) => x * 2;
const subtract = (x) => x - 4;

const pipe = (...functions) => (value) =>
    functions.reduce((acc, fn) => fn(acc), value);


const process = pipe(add, multiply, subtract);
console.log(process(5)); 