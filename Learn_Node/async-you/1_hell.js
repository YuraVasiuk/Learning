/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// get the modules
var http = require('http');
var fs = require('fs');

// read the file 
var filepath;
fs.readFile(process.argv[2], function callBack1(err, data) {
    filepath = data.toString();
    http.get(filepath, function callBack2(res) {
        res.on('data', function callBack3(data) {
            console.log(data.toString());
        });
    });
});
