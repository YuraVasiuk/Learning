/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// this defines what to do with the return data
function callBack(response) {

    response.on("data", function (data) {
        var text = data.toString('utf8');
        console.log(text);
    });

    response.on('error', function (error) {
        console.log(error);
    });
}

// make the request, wait for the response, and call the callback
var http = require('http');
http.get(process.argv[2], callBack)
    .on('error', console.error);

// just to show the execution was running first here
//console.log(process.argv[2]);

// --------------------------------------------------------------------
/*
//Here is the official solution
var http = require('http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error);
*/
