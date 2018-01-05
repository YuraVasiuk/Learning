/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

'use strict';

function attachTitle(secondName) {
    return 'DR. ' + secondName;
}

var promise = new Promise(function (fulfill, reject) {
    fulfill('MANHATTAN');
})

promise.then(attachTitle).then(console.log);
