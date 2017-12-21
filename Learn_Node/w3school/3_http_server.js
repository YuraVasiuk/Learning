/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // run this type of url in the browser 
    // http://localhost:2222/?key1=value1&key2=value2&key3=value3
    res.write('The requested url is ' + req.url + '\n');
    var q = url.parse(req.url, true).query;
    var pair_values = q.key1 + " " + q.key2 + " " + q.key3;
    res.write('\nThe query is searching for these values: ' + pair_values);
    res.end();
    console.log('The http server is on and is listenning to the port 2222..');
}).listen(2222);
