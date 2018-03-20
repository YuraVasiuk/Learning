/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

module.exports =
        (string, bangs = string.length) => string + "!".repeat(bangs);