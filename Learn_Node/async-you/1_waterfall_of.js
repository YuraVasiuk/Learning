/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// This is the official solution
var async = require('async');
var http = require('http');
var fs = require('fs');

async.waterfall([
      function (done) {
        fs.readFile(process.argv[2], function (err, data) {
            if (err) return done(err);
            done(null, data);
        });
      },

      function (data, done) {
        var body = '';
        http.get(data.toString().trimRight(), function (res) {
            res.on('data', function (chunk) {
                body += chunk.toString();
            });

            res.on('end', function () {
                done(null, body);
            });
        }).on('error', function (e) {
            done(e);
        });
      }
    ], function done(err, result) {
    if (err) {
        return console.error(err);
    }
    console.log(result);
});
