/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

// all is done in ASYNCHRONOUS mode 

// two execution branches
// 1.1
var fs = require('fs');
// 1.2
var lines = undefined;
// definition
function countLines() {
    // definition
    function callback(err, contents) {
        // 2.2
        lines = contents.toString().split('\n').length - 1;
        // 2.3
        console.log(lines);
        // 2.4

        // ... so on
    }
    // 2.1
    fs.readFile(process.argv[2], callback);
}
// 1.3
countLines();

// 1.4

// 1.5 

// ... so on
