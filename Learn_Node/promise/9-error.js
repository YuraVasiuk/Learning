/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

'use strict';

function parsePromised(json) {
    var promise = new Promise(function (fulfill, reject) {
        var string;
        try {
            string = JSON.parse(json);
            fulfill(string);
        } catch (error) {
            reject(error.message);
        }
    });
    return promise;
}

parsePromised(process.argv[2])
    .then(console.log)
    .then(null, console.log);
