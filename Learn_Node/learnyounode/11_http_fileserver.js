/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// get the user data
var portNum = process.argv[2];
var file = process.argv[3];

// get the modules
var http = require('http');
var fs = require('fs');

// define the server
var server = http.createServer(function (req, res) {
    // the server operating logic

    // the confirmation to the user things are ok
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    /* read file approach
    fs.readFile(file, function (err, data) {
        res.write(data);
        res.end();
    });
    */
    // stream approach
    var stream = fs.createReadStream(file);
    stream.pipe(res);
});

// create the server and make it listening
server.listen(portNum);

// -----------------------------------------------------------
/* Here is the official solution
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });

    fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
*/
