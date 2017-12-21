/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var http = require('http'),
    fs = require('fs'),
    async = require('async');

async.waterfall([
    function (cb) {
            fs.readFile(process.argv[2], function (err, content) {
                if (err) cb(err);
                cb(null, content.toString());
            });
    },

    function (content, cb) {
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

    }
],
    function (err, result) {
        if (err) return console.error(err);
        console.log(result);
    });
