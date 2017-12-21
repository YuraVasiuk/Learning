/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// THIS WHOLE THING IS AN ENGINE TO BE CALLED BY THE INTERFACE
function interfaceCallBack(url, counter) {

    var dataCollector = "";

    function engineCallBack(response) {

        // second asnc 'data'
        // (it keeps sending the data in until 'end')
        response.on('data', function eventCallBack(data) {
            dataCollector += data.toString();
        });

        // second async 'end'
        // (it finishes the second async execution when the 'end' response is sent in from the server)
        response.on('end', function eventCallBack() {

            responseCounter++;
            dataHolder[counter] = dataCollector;

            if (responseCounter === 3) {
                for (var i = 2; i < 5; i++) {
                    console.log(dataHolder[i]);
                }
            }
        });

        // second async 'error'
        // (it happens if 'error' is sent from the server)
        response.on('error', function (error) {
            console.log(error);
        });
    }

    // first async
    http.get(url, engineCallBack)
        .on('error', console.error);
}


// THIS WHOLE THING IS AN INTERFACE TO SET THINGS UP AND CALL THE ENGINE

var http = require('http');

// to be used in the inside functions
var dataHolder = new Array();
var responseCounter = 0;

for (var i = 2; i < 5; i++) {
    interfaceCallBack(process.argv[i], i);
}

// ----------------------------------------------------------------
/*
Here is the official solution
var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            results[index] = data.toString();
            count++;

            if (count === 3) {
                printResults();
            }
        }));
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}
*/
