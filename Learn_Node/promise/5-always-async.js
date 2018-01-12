/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';

// for any promise the computer reads the file twice:
// 1st read -- set up the pipes of the promise
// 2nd read -- flush the activities of code through those pipes

var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

// invoked SECOND
promise.then(console.log);
// invoked FIRST
console.log('MAIN PROGRAM');
