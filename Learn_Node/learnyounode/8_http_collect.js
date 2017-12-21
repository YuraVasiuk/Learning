/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// 1st APPROACH (collect data across multiple data events)
// I will only use it for running and visualising, the verification will be done in 2nd approach
// this defines what to do with the return data
/*
function callBack(response) {

    var dataCollector = "";
    response.on('data', function eventCallBack(data) {
        dataCollector += (data.toString('utf8') + "1"); // + "1" is visualising
    });

    response.on('end', function eventCallBack() {
        var numOfCharacters = dataCollector.length;
        console.log(numOfCharacters);
        console.log(dataCollector);
        console.log("The end of recieving data");  // just the visualising 
    });

    response.on('error', function eventCallBack(error) {
        console.log(error);
    });
}

// make the request, wait for the response, and call the callback
var http = require('http');
http.get(process.argv[2], callBack)
    .on('error', console.error);
*/

// 2nd APPROACH (use the third party package)
function callBack(response) {

    var dataCollector = "";
    response.pipe(bl(function eventCallBack(error, data) {
        if (error) {
            return console.log(error);
        }
        dataCollector = data.toString('utf8');
    }));

    response.on('end', function eventCallBack() {
        var numOfCharacters = dataCollector.length;
        console.log(numOfCharacters);
        console.log(dataCollector);
    });
}

// make the request, wait for the response, and call the callback
var bl = require('bl');
var http = require('http');
http.get(process.argv[2], callBack)
    .on('error', console.error);

/*
//Here is the official solution
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
*/
