/*
    In JavaScript, unlike some other languages, default arguments can be expressions:

    function log(arg, transform = x => x) {
        console.log(transform(arg));
    }
    log("Hello");                       // => "Hello"
    log("Hello", y => y.toUpperCase()); // => "HELLO"
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

module.exports = function makeimportants(string, number) {
        var ex_number;
        if (number === undefined){
            ex_number = string.length;
        } else {
            ex_number = number;
        }
        var new_string = string + '!'.repeat(ex_number);
        return new_string;
    };