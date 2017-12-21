/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// just for fun -- time tracking
var sT = new Date().getTime();

// get the port number from the user
var portNumber = process.argv[2];

// get the module
var net = require('net');

// compensate if less then 10 happens and convert to string
function fillZeros(num) {

    if (num < 10) {
        num = "0" + num.toString();
    } else {
        num.toString();
    }
    return num;
}

// create the TCP server
var server = net.createServer(function (socket) {

    // logic for handling time
    var time = new Date();
    var year = fillZeros(time.getFullYear());
    var month = fillZeros(time.getMonth() + 1);
    var day = fillZeros(time.getDate());
    var hour = fillZeros(time.getHours());
    var minutes = fillZeros(time.getMinutes());

    var data = year + "-" + month + "-" + day + " " + hour + ":" + minutes + "\n";

    // pass the time to the user
    socket.write(data);

    // just for fun -- time tracking
    var f2T = new Date().getTime();
    console.log("The request has been processed and sent to the user: " + (f2T - sT) + " milliseconds elapsed");

    // close the connection
    socket.end();
});

// start using the server
server.listen(portNumber);

// just for fun -- time tracking
var f1T = new Date().getTime();
console.log("The server is created and is listening now: " + (f1T - sT) + " milliseconds elapsed");
