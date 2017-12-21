/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

/*
The main difference between the waterfall and series functions is that the
  result from a task function in async.series won't be passed along to the
  next function once it completes. series will collect all results as an
  array and pass it to the optional callback that runs once all of the task
  functions have completed. For example:
*/

var async = require('async');

async.series([
       function (callback) {
            setTimeout(function () {
                callback(null, 'one');
            }, 200);
       },
       function (callback) {
            setTimeout(function () {
                callback(null, 'two');
            }, 100);
       }
     ],
    // optional callback
    function (err, results) {
        // results is now equal to ['one', 'two']
        console.log(results);
    });

/*
Instead of using an array as the result container async.series can use an
  object, running each property and creating a result object with the same
  properties. The above example can be written like so:
*/

async.series({
    one: function (done) {
        done(null, '1');
    },
    two: function (done) {
        done(null, '2');
    }
}, function (err, results) {
    console.log(results);
    // results will be {one: 1, two: 2}
});
