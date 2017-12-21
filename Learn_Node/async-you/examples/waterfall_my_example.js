/* eslint-env node */
/* eslint no-console: 0, semi: 2 */
var startTime = new Date().getTime();
console.log("Main started:0");

var http = require('http'),
    fs = require('fs'),
    async = require('async');

async.waterfall([
    function (cb) {
            var w1S = new Date().getTime();
            console.log("W1 started:" + (w1S - startTime));
            fs.readFile(process.argv[2], function (err, content) {
                if (err) cb(err);
                cb(null, content.toString());
            });
            var w1F = new Date().getTime();
            console.log("W1 finished:" + (w1F - startTime));
    },

    function (content, cb) {
            var w2S = new Date().getTime();
            console.log("W2 started:" + (w2S - startTime));
            http.get(content, function (res) {
                var text = '';
                res.on('data', function (data) {
                    text += data.toString();
                });
                res.on('end', function () {
                    cb(null, text);
                });
            }).on('error', function (err) {
                cb(err);
            });
            var w2F = new Date().getTime();
            console.log("W2 finished:" + (w2F - startTime));
    }
],
    function (err, result) {
        var wRS = new Date().getTime();
        console.log("WR started:" + (wRS - startTime));
        if (err) return console.error(err);
        console.log(result);
        var wRF = new Date().getTime();
        console.log("WR finished:" + (wRF - startTime));
    });

var mainF = new Date().getTime();
console.log("Main finished:" + (mainF - startTime));
