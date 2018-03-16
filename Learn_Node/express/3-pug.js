/*
#18 Create an Express.js app with a home page rendered by the Pug template           engine.
#20 The home page should respond to /home.
#21 The view should show the current date using 'new Date().toDateString()'.
#21 We use 'toDateString()' to simply return the date in a human-readable format
    without the time.
#19 The path to index.pug will be provided in
    process.argv[3].
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', process.argv[3]);
app.get('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);