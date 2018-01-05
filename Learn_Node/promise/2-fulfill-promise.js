/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';
require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        fulfill('FULFILLED!');
    }, 3000);
});

promise.then(function (timeOut) {
    console.log(timeOut);
});

// official solution
// promise.then(console.log);
