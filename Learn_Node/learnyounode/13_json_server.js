/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// get the modules
var http = require('http');
var url = require('url');

// define the server
var server = http.createServer(function (req, res) {

    // convert the incoming query string into the object
    var urlObject = url.parse(req.url, true);
    // get the attribute with the time from the object
    var time = urlObject.search;

    // confirm recieving the request set the Content-Type properly
    if (urlObject) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
    }
    // or sent the error message to the client
    else {
        res.writeHead(404);
        res.end();
    }

    // process the converted object
    // this string will be sent back to the client
    var jsonString;
    // 1) parsetime
    if (urlObject.pathname === '/api/parsetime') {
        // get hours, mins, and secs from the date
        var date = new Date(time.substring(5));
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        // make a JSON object and prepare it for sending back
        var obj1 = {
            "hour": hours,
            "minute": minutes,
            "second": seconds
        };
        jsonString = JSON.stringify(obj1);
    }
    // 2) unixtime
    else if (urlObject.pathname === '/api/unixtime') {
        // process the time string for getting the milliseconds
        time = time.substring(5);
        var milliseconds = new Date(time).getTime();
        // make a JSON object and prepare it for sending back
        var obj2 = {
            "unixtime": milliseconds,
        };
        jsonString = JSON.stringify(obj2);
    }

    // there is no data sent by the client to the server,
    // therefore I do nothing with the req.on events 

    // send the data to the client
    res.write(jsonString);
    // and close the connection 
    res.end();
});

// create the server and make it listening
server.listen(Number(process.argv[2]));

// ----------------------------------------------------------------
/* Here is the official solution
var http = require('http');
var url = require('url');

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime(time) {
    return {
        unixtime: time.getTime()
    };
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;

    if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time);
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time);
    }

    if (result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(Number(process.argv[2]));
*/
