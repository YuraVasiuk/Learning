/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var async = require('async');

// memo is 0 coming from the reduce, 
// num is the sequence of items from the array in the reduce,
// callback returns the memo or null if the collect fails.
function collect(memo, num, callback) {
    console.log('memo: ' + memo);
    var number = parseInt(num);
    memo += number;
    callback(null, memo);
}

async.reduce(['1', '2', '3', '4'], 0, collect, function (err, result) {
    console.log('The result is the sum of collect outputs: ' + result);
});
