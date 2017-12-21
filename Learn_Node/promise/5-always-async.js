/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';

// VERY INTERESTING
// !!! this happens second
var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});
// !!! this happens first
promise.then(console.log, null);
console.log('MAIN PROGRAM');
