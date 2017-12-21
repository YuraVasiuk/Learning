/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

/*
  For example the following code will:

  1) do a GET request to http://localhost:3131 in the first waterfall
  function. 2) The response body is passed as an argument to the next
  waterfall function via the callback. The second function in the waterfall
  accepts the body as a parameter and JSON.parse's it to get to the port
  property then it does another GET request.
*/

var http = require('http'),
    async = require('async');

async.waterfall([
       function (cb) {
        var body1 = '';
        // response is JSON encoded object like the following {port: 3132}
        http.get("http://localhost:3131", function (res) {
            res.on('data', function (chunk) {
                body1 += chunk.toString();
            });
            res.on('end', function () {
                cb(null, body1);
            });
        }).on('error', function (err) {
            cb(err);
        });
       },

       function (body1, cb) {
        var port = JSON.parse(body1).port;
        var body2 = '';
        http.get("http://localhost:" + port, function (res) {
            res.on('data', function (chunk) {
                body2 += chunk.toString();
            });
            res.on('end', function () {
                cb(null, body2);
            });
        }).on('error', function (err) {
            cb(err);
        });
       }
     ], function (err, result) {
    if (err) return console.error(err);
    console.log(result);
});
