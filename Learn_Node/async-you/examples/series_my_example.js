/* eslint-env node */
/* eslint no-console: 0, semi: 2 */
var startTime = new Date().getTime();
console.log("Main started:0");

var async = require('async'),
    http = require('http');

var url1 = process.argv[2],
    url2 = process.argv[3];

async.series({
        requestOne: function (done) {
            var s1S = new Date().getTime();
            console.log("S1 started:" + (s1S - startTime));
            http.get(url1, function (res) {
                res.on('data', function (data) {
                    done(null, data.toString());
                });
                var s1F = new Date().getTime();
                console.log("S1 finished:" + (s1F - startTime));
            }).on('error', console.error);
        },
        requestTwo: function (done) {
            var s2S = new Date().getTime();
            console.log("S2 started:" + (s2S - startTime));
            http.get(url2, function (res) {
                res.on('data', function (data) {
                    done(null, data.toString());
                });
                var s2F = new Date().getTime();
                console.log("S2 finished:" + (s2F - startTime));
            }).on('error', console.error);
        }
    },
    function (err, results) {
        var sRS = new Date().getTime();
        console.log("SR started:" + (sRS - startTime));
        console.log(results);
        var sRF = new Date().getTime();
        console.log("SR finished:" + (sRF - startTime));
    });

var mainF = new Date().getTime();
console.log("Main finished:" + (mainF - startTime));
