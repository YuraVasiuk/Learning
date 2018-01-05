/* eslint-env node, es6 */
/* eslint no-unused-vars:1 */
/* eslint no-console:0, semi: 2 */

'use strict';

function alwaysThrows(step) {
    throw new Error('the error is thrown after step ' + step);
}

function iterate(integer) {
    var hi = '';
    console.log(integer);
    return integer + 1;

}

var i,
    promise = Promise.resolve(iterate(1));

console.log('h1');

for (i = 0; i < 4; i++) {
    promise = promise.then(iterate);
}
console.log('h2');

promise = promise.then(alwaysThrows);

for (i = 0; i < 5; i++) {
    promise = promise.then(iterate);
}
console.log('h3');


promise.catch(console.log);
