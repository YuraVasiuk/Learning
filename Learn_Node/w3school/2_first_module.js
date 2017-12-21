/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var http = require('http'),
    dt = require('./2_my_module');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('Current date and time: ' + dt.getDateTime());
    res.end();
}).listen(2222);

console.log('The time server is on and is listenning to the port 2222..');
