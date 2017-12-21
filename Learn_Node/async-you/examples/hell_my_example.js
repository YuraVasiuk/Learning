/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// get the modules
var http = require('http');
var fs = require('fs');

// read the file 
var filepath;
console.log("branch 1...");
fs.readFile(process.argv[2], function callBack1(err, data) {
    console.log("branch 2...");
    filepath = data.toString();
    http.get(filepath, function callBack2(res) {
        console.log("branch 3...");
        res.on('data', function callBack3(data) {
            console.log("branch 4...");
            console.log(data.toString());
            //console.log(res);
            console.log("branch ...4");
        });
        console.log("branch ...3");
    });
    console.log("branch ...2");
});
console.log("branch ...1...");
