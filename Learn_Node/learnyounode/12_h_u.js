/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// get the user data
var portNum = process.argv[2];

// get the modules
var http = require('http');
var map = require('through2-map');

// define the server
var server = http.createServer(function (inStream, outStream) {

    // only post requests will be processed
    if (inStream.method !== 'POST') {
        return outStream.end('send me a POST\n');
    }

    inStream.pipe(map(function (text) {
        return text.toString().toUpperCase();
    })).pipe(outStream);
});

// create the server and make it listening
server.listen(portNum);
