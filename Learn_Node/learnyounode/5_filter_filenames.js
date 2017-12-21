/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// all is done in ASYNCHRONOUS mode 

// two execution branches
// brach #1 starts
var fs = require('fs');

var fileName = undefined;
var splitName = undefined;
var extention = undefined;

function callback(err, contents) {
    // --> and keeps running down...
    // just for convenience, here is the passed by the user filter
    var filter = process.argv[3];
    // here is the array of the file name strings
    var fileNames = contents;

    // the filtering is done in the loop
    for (var i in fileNames) {
        // digging down to the extantion
        fileName = fileNames[i];
        splitName = fileName.split('.');
        extention = splitName[1];
        // checking and printing
        if (extention === filter) {
            console.log(fileName); // BRANCH #2 RESULT
        }
    }
}
// branch #2 starts the execution here -->
fs.readdir(process.argv[2], callback);

// branch #1 keeps running down...
console.log(fileName); // BRANCH #1 RESULT

// -------------------------------------------------------------
/*
Here is the official solution

var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/
