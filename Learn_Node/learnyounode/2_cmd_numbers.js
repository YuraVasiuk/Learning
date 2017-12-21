/* eslint-env node */
/* eslint no-console: 0, semi: 2 */

var num = 0;

// my solution
/*
for(var i = 2; process.argv[i] !== undefined; i++) {
    num += +process.argv[i];
}
*/

// official solution
for(var i = 2; i < process.argv.length; i++) {
    num += Number(process.argv[i]);
}

console.log(num);