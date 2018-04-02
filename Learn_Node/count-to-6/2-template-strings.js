/*
    ES6 template strings are a new string syntax, which use backticks ( ` ) instead of quotation marks ( '' or "" ). Template strings give you more powerful abilities for constructing strings. They allow string interpolation.
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var name = process.argv[2];
var name_low_case = name.toLowerCase();
var interpolated_string = `Hello, ${name}!\nYour name lowercased is "${name_low_case}".`;

console.log(interpolated_string);
