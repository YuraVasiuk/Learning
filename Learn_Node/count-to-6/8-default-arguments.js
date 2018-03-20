/*
    In ES6, functions can take default arguments
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

module.exports = function midpoint(first = 0, last = 1) {
        return (first + last) / 2;
    };