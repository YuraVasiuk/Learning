/* eslint-env node, es6 */
/* eslint no-unused-vars:1 */
/* eslint no-console:0, semi: 2 */

'use strict';

function iterate(num) {
    console.log(num);
    return num + 1;
}

function alwaysThrows() {
    throw new Error('OH NOES');
}

function onReject(error) {
    console.log(error.message);
}

// Create a promise chain using `Promise.resolve` that wraps your iterate method,
Promise.resolve(iterate(1))
    // then a series of iterations that attempts to perform `iterate` a total of 10 times
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    // Insert a call to `alwaysThrows` after your 5th call of `iterate`
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    // Attach a rejection handler at the bottom of your chain to print the`error.message`
    .catch(onReject);
