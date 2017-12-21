/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var async = require('async');
var count = 0;

async.whilst(
    function test() {
        return count < 5;
    },
    function process(callback) {
        count++;
        callback(null, count);
    },
    function returnResult(err, result) {
        console.log(result);
    }
);
