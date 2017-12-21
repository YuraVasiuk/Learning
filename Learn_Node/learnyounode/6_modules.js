/* eslint-env node */
/* eslint no-console: 0, semi: 2 */
function callback(err, filteredFiles) {

    // handle the error if it is passed
    if (err) {
        console.log(err);
    }
    filteredFiles.forEach(function (file) {
        console.log(file);
    });
}

var mymodule = require('./6_mymodule.js');
mymodule(process.argv[2], process.argv[3], callback);

// ------------------------------------------------------------------------
/*
Here is the official solution
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
*/
