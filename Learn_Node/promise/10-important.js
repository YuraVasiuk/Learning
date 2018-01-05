/* eslint-env node, es6 */
/* eslint no-unused-vars:1 */
/* eslint no-console:0, semi: 2 */

'use strict';

function alwaysThrows(step) {
    throw new Error('the error is thrown after step ' + step);
}

function iterate(integer) {
    console.log(integer);
}

var promise = new Promise(function (fulfill, reject) {
    try {
        for (var i = 1; i <= 10; i++) {
            iterate(i);
            if (i === 5) {
                alwaysThrows(i);
            }
        }
        fulfill();
    } catch (error) {
        reject(error.message);
    }
});

promise.then().catch(console.log);
