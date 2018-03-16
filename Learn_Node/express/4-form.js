/*
#25 Write a route ('/form') that processes HTML form input
    (<form><input name="str"/></form>) and responds with 
#26 the value of str backwards.
#25 To handle a POST request, use the post() method which is used the same way       as get(): app.post('/path', function(req, res){...})
#23 Express.js uses middleware to provide extra functionality to your web           server. Simply put, a middleware is a function invoked by Express.js before     your own request handler.
    Middleware provide a large variety of functionality such as logging, serving
    static files, and error handling.
#23 A middleware is added by calling use() on the application and passing the
    middleware as a parameter.
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
    var backwards = req.body.str.split('').reverse().join('');
    res.send(backwards);
});

app.listen(process.argv[2]);