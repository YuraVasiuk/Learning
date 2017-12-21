/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var async = require('async'),
    http = require('http');

var data = '';
var url = process.argv[2];
var find = 'meerkat';
var count = 0;

async.whilst(
    function test() {
        return data.search(find);
    },
    function process(callback) {
        http.get(url, function (res) {
            res.on('error', function (err) {
                console.log(err);
            });
            res.on('data', function (chunk) {
                data += chunk.toString();
            });
            res.on('end', function () {
                count++;
                console.log("the callback returned " + count);
                callback(null, count);
            });
        }).on('error', console.error);
    },
    function returnResult(err, result) {
        console.log("Result: " + result + " process functions have been executed");
    }
);
