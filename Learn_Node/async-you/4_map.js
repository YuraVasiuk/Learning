/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

/* The official solution is identical to mine */
var async = require('async'),
    http = require('http');

async.map([process.argv[2], process.argv[3]], function (url, done) {
        var body = '';
        http.get(url, function (res) {
            res.on('error', function (err) {
                console.log(err);
            });
            res.on('data', function (data) {
                body += data.toString();
            });
            res.on('end', function () {
                return done(null, body);
            });
        }).on('error', function (err) {
            done(err);
        });
    },
    function (err, results) {
        if (err) console.log(err);
        console.log(results);
    });
