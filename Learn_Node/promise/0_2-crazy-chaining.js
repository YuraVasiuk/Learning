// This is just the code holder.  You will need to run it in the file 7 to make it work
/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

'use strict';
console.log('start setting up promise structure----------------------------------------------------');
// long way
console.log('promise structure set up----------------------------------------------------');
var firstPromise = first(); // first() returns the promise
console.log('first promise -- ', firstPromise);

var secondPromise = firstPromise.then(function (value) {
    return second(value);
});
console.log('second promise -- ', secondPromise);

secondPromise.then(function (value) {
    console.log('the value of the second promise -- ', value);

})
console.log('----------------------------------------------------');

console.log('promise structure set up----------------------------------------------------');
var firstPromise = first(); // first() returns the promise
console.log('first promise -- ', firstPromise);

var secondPromise = firstPromise.then(function (value) {
    return second(value);
});
console.log('second promise -- ', secondPromise);

secondPromise.then(function (value) {
    console.log('the value of the second promise -- ', value);

})
console.log('----------------------------------------------------');

// crazy shortcut
console.log('promise structure set up----------------------------------------------------');
first().then(second).then(console.log);
console.log('----------------------------------------------------');

console.log('----------------------------------------------------promise structure setting up finished');
