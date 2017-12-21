/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';

var promise = new Promise(function (fulfill, reject) {
    // job to be done for getting the result (success or failure)
    var error = new Error('REJECTED!');
    setTimeout(function () {
        // this is the callback of promise, just returns the result to the caller function
        reject(error);
    }, 300);
});

function onReject(error) {
    console.log(error.message);
}

promise.then(null, onReject);
