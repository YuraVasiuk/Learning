/*
    var numbers = [1, 1, 2, 3, 5, 8];
    var max = Math.max(...numbers);
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

let args = process.argv.slice(2);
var min = Math.min(...args);

console.log(`The minimum of [${args}] is ${min}`);