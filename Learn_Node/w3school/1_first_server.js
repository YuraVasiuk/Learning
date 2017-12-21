/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('Hello from port 2222!');
}).listen(2222);

console.log('The server is on and is listenning to the port 2222..');
