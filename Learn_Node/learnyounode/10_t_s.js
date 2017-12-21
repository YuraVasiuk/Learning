/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

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

    // close the connection
    socket.end();
});

// start using the server
server.listen(portNumber);

// -------------------------------------------------------
/*
Here is the official solution
var net = require('net');

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}

function now() {
    var d = new Date();
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes());
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));
*/
