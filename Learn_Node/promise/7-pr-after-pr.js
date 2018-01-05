/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

'use strict';

// long way
var firstPromise = first();
var secondPromise = firstPromise.then(function (value) {
    return second(value);
})
secondPromise.then(console.log);

// crazy shortcut
first().then(second).then(console.log);
