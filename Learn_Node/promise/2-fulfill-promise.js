/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';
require('es6-promise');

console.log('it is running 1...');
var promise = new Promise(function (fulfill, reject) {
    console.log('it is running 2...');
    setTimeout(function () {
        console.log('it is running 5...');
        fulfill('FULFILLED!');
    }, 3000);
});

console.log('it is running 3...');
promise.then(function (timeOut) {
    console.log(timeOut);
    console.log('it is running 6...');
})
console.log('it is running 4...');

// official solution
// promise.then(console.log);
