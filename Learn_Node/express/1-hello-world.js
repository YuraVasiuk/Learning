/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var app = express();
app.get('/home', function(req, res){
    res.end('Hello World!');
});
app.listen(process.argv[2]);