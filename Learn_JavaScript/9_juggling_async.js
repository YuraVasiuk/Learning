/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// THIS WHOLE THING IS AN ENGINE TO BE CALLED BY THE INTERFACE
function interfaceCallBack(url, counter) {

    var dataCollector = "";

    function engineCallBack(response) {

        // just to separate lines between faC and the responses
        if (makeSingleNewLine === 0) {
            console.log("");
            makeSingleNewLine++;
        }

        // second asnc 'data'
        // (it keeps sending the data in until 'end')
        response.on('data', function eventCallBack(data) {
            dataCollector += data.toString();
        });

        // second async 'end'
        // (it finishes the second async execution when the 'end' response is sent in from the server)
        response.on('end', function eventCallBack() {

            // time track down
            var saT = new Date();
            var seconds = saT.getSeconds() - sT.getSeconds();
            var delay = 0;
            if (seconds === 0) {
                delay = saT.getMilliseconds() - sT.getMilliseconds();
            } else {
                delay = (1000 - sT.getMilliseconds()) + (saT.getMilliseconds() - 1000) + (seconds * 1000);
            }

            responseCounter++;
            dataHolder[counter] = "RESPONSE # " + responseCounter +
                " : " + (delay + " milliseconds delay") + "\n" + dataCollector;

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

    // time track down for the first async
    var faT = new Date();
    console.log("First async called : " + (faT.getMilliseconds() - sT.getMilliseconds()) + " milliseconds delay");

    // first async
    http.get(url, engineCallBack)
        .on('error', console.error);
}

// THIS WHOLE THING IS AN INTERFACE TO SET THINGS UP AND CALL THE ENGINE

var http = require('http');

// to be used in the inside functions
var dataHolder = new Array();
var responseCounter = 0;

// time track down
var sT = new Date();
console.log("Start the program: 0 milliseconds\n");

// just for fun (it is used on line 12)
var makeSingleNewLine = 0;

for (var i = 2; i < 5; i++) {
    interfaceCallBack(process.argv[i], i);
}
