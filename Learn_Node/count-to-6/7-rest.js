/*
    Rest parameters are used when you want to write a function that accepts a variadic number of arguments, but acts on them as if they were an array.
    
    function sum(...args) {
        var result = 0;
        args.forEach(function (value) {
            result += value;
        });

        return result;
    }
    sum(1, 2, 3); // 6
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

module.exports = function average(...args) {
        var sum = args.reduce((soFar, value) => soFar + value);
        return sum / args.length;
    };