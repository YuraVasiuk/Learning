/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
    console.log(error.message);
}

// just to see that only console.log is invoked 
promise.then(console.log, onReject);
