/* eslint-env node */
/* eslint no-console: 0, semi: 2 */
var callCounter = 1;
var startTime = new Date().getTime();
console.log("Main started:0");

var async = require('async'),
    http = require('http');

async.map([process.argv[2], process.argv[3]], function (url, done) {
        var body = '';
        http.get(url, function (res) {
            var mS = new Date().getTime();
            console.log("M" + callCounter + " started:" + (mS - startTime));
            res.on('error', function (err) {
                console.log(err);
            });
            res.on('data', function (data) {
                body += data.toString();
            });
            res.on('end', function () {
                callCounter++;
                return done(null, body);
            });
            var mF = new Date().getTime();
            console.log("M" + callCounter + " finished:" + (mF - startTime));
        }).on('error', function (err) {
            done(err);
        });
    },
    function (err, results) {
        if (err) console.log(err);
        console.log(results);
    });

var mainF = new Date().getTime();
console.log("Main finished:" + (mainF - startTime));
