/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// get the user data
var portNum = process.argv[2];

// get the modules
var http = require('http');

// define the server
var server = http.createServer(function (req, res) {

    // only post requests will be processed
    if (req.method === 'POST') {
        var text = "";
        req.on('error', function (err) {
            console.error(err);
        });
        req.on('data', function (data) {
            text += data.toString();
        });
        req.on('end', function () {
            console.log("The data has been received from port #" + portNum);
            console.log(text);
            // to uppercase
            var upperCase = text.toUpperCase();
            // sending back and closing the connection
            console.log("The converted to uppercase data will be sent to the port #" + portNum);
            res.write(upperCase);
            res.end();
        });
    }
});

// create the server and make it listening
server.listen(portNum);
