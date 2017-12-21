/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

module.exports = function (directory, extention, callback) {

    var fs = require('fs');
    var path = require('path');

    // the container for the filtered files
    var filteredFiles = [];

    // read the file names into the array
    fs.readdir(directory, function moduleCallback(err, files) {
        // this is tipical error handling in ascync
        // if there is error, it is passed from reading the directory 
        // and I just need to tell it what to do 
        if (err) {
            return callback(err);
        }
        files.forEach(function (file) {
            if (path.extname(file) === ('.' + extention)) {
                filteredFiles.push(file);
                //filteredFiles += file;
                //filteredFiles += '\n';
            }
        });
        callback(err, filteredFiles);
    });
};

// ----------------------------------------------------------------------
/*
Here is the official solution
var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr;
        });

        callback(null, list);
    });
};
*/
