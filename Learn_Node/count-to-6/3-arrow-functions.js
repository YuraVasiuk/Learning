/*
    x => x + 1
    that means the same thing as the ES5 code:
    function (x) { return x + 1; }
    
    if you need multiple arguments, you'll need to wrap them in parentheses:
    (x, y) => x + y
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var inputs = process.argv.slice(2);
var result1 = inputs.map(el => el = el.charAt(0));
const reducer = (accumulator, current_value) => accumulator + current_value;
var result2 = result1.reduce(reducer);
console.log(`[${inputs}] becomes "${result2}"`);
