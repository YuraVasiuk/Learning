/*
Create an Express.js app with a home page rendered by the Pug template engine.
The home page should respond to /home.
The view should show the current date using 'new Date().toDateString()'.
We use 'toDateString()' to simply return the date in a human-readable format
without the time.
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var path = require('path');

var app = express();


app.get('/home', function(req, res){
    res.end('Hello World!');
});
app.listen(process.argv[2]);