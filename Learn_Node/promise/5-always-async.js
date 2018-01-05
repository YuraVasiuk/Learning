/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

// invoked SECOND
promise.then(console.log);
// invoked FIRST
console.log('MAIN PROGRAM');
