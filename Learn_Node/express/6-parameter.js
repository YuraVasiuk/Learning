/*
#15 Create an Express.js server that processes PUT /message/:id requests
#18 - 20 and produces a SHA-1 hash of the current date combined with the ID from          the URL.
#16 The given variable is then stored in req.params.
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var express = require('express');
var crypto = require('crypto');
var app = express();

app.put('/message/:id', function(req, res){
    var id = req.params.id;
    
    var hash = crypto.createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
    
    res.send(hash);  
});

app.listen(process.argv[2]);