/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var async = require('async'),
    http = require('http');

var url1 = process.argv[2],
    url2 = process.argv[3];

async.series({
        requestOne: function (done) {
            http.get(url1, function (res) {
                res.on('data', function (data) {
                    done(null, data.toString());
                });
            }).on('error', console.error);
        },
        requestTwo: function (done) {
            http.get(url2, function (res) {
                res.on('data', function (data) {
                    done(null, data.toString());
                });
            }).on('error', console.error);
        }
    },
    function (err, results) {
        console.log(results);
    });
