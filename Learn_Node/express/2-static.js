/*
#16 This exercise is about serving static assets like HTML files.
#18 Your solution must listen on the port number supplied by process.argv[2].
#16 The index.html file is provided and usable via the path supplied by
    process.argv[3].
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);