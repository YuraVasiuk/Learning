/*eslint-env node*/
/*eslint no-console:0*/
var http = require('http'),
    fs = require('fs'),
    open = require('open');


function one(callback) {
    var url = 'http://www.google.com';

    http.get(url, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');

        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });

        res.on('end', function () {
            fs.writeFileSync('google.html', data);
            //console.log(data);
        });
        //console.log('res');
        open('google.html');
        callback();
    });
}

function oneCallback() {
    console.log('\nThe html page has been received, written to a file, and displayed in the EI browser');
}

one(oneCallback);
