/*
#15 Write a route that extracts data from the query string in the GET /search URL
    route, e.g. ?results=recent&include_tabs=true
#17 and then outputs it back to the user in JSON format.
#16 extract query string parameters
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var app = express();

app.get('/search', function(req, res){
    var data = req.query;
    res.send(data);
});

app.listen(process.argv[2]);