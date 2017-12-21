/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// all is done in SYNCHRONOUS mode 
// (all methods end with ...Sync)  

// get the filesystem module
var fs = require('fs');

// my solution
/*
// read the file spexified by the cmd user request
// the path to the file is the third cmd argument
var fileContent = fs.readFileSync(process.argv[2]);

// the file content is now in the Buffer type
// turn it into the string
var fileContentString = fileContent.toString();

// split the above string into the array of lines
var lines = fileContentString.split('\n');

// count the number of lines
var lineCount = 0;
for(var i = 0; i < lines.length; i++) {
    lineCount++;
}
// the adjunstment is made for the provided testfile
lineCount--;

console.log(lineCount);
*/

// official solution
var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;

// note you can avoid the .toString() by passing // // 'utf8' as the
// second argument to readFileSync, then you'll get a // String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

console.log(lines);
