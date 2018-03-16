/*
Write a server that:
#18 when it receives a GET
#19 reads a file --> fs.readFile(filename, callback) 
#22 parses it to JSON
#26 and responds with that content to the user
#18 The server should respond to any GET that matches the /books resource path.
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], (err, data) => {
        if (err) return res.sendStatus(500);
        try{
        var object = JSON.parse(data);
        } catch (err) {
            res.sendStatus(500);
        }
        res.send(object);
    });
});

app.listen(process.argv[2]);