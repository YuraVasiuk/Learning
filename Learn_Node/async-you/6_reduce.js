/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var async = require('async'),
    http = require('http');

var urlPassed = process.argv[2];

// memo is 0 coming from the reduce, 
// num is the sequence of items from the array in the reduce,
// callback returns the memo or null if the collect fails.
function collect(memo, num, callback) {
    var urlFull = urlPassed + '?number=' + num;
    http.get(urlFull, function (res) {
        res.on('error', function (err) {
            console.log(err);
        });
        res.on('data', function (data) {
            memo += parseInt(data);
        });
        res.on('end', function () {
            callback(null, memo);
        });
    }).on('error', console.error);
}

async.reduce(['one', 'two', 'three', ], 0, collect, function (err, result) {
    console.log(result);
});
