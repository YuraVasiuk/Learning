/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0])
                   .reduce((soFar, s) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);