/*
#15 plug in some stylus middleware using app.use()
#16 you'll need to serve static files
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var path = require('path');
var style = require('stylus');
var app = express();

app.use(style.middleware(process.argv[3]));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);