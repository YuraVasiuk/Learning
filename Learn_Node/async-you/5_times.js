/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var async = require('async'),
    http = require('http');

var hostName = process.argv[2],
    port = process.argv[3];

async.series({
        post: function (done) {
            async.times(5, function (n, next) {
                var reqData = JSON.stringify({
                    "user_id": (n + 1)
                });
                var reqOptions = {
                    host: hostName,
                    port: port,
                    path: '/users/create',
                    method: 'POST'
                };
                var req = http.request(reqOptions, function (res) {
                    res.on('data', function (data) {
                        if (data) {
                            console.log(data);
                        }
                    });
                    res.on('end', function () {
                        next();
                    });
                    res.on('error', function (err) {
                        next(err);
                    });
                });
                req.write(reqData);
                req.end();
            });
            done(null, '5 users created');
        },
        get: function (done) {
            var url = 'http://' + hostName + ':' + port + '/users';
            var response = '';
            http.get(url, function (res) {
                res.on('error', function (err) {
                    console.log(err);
                });
                res.on('data', function (data) {
                    response += data.toString();
                });
                res.on('end', function () {
                    done(null, response);
                });
            }).on('error', console.error);
        }
    },
    function (err, results) {
        if (err) {
            return console.log(err);
        }
        //console.log(results.post);
        console.log(results.get);
    });
