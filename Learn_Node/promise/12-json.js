/* eslint-env node, es6 */
/* eslint no-unused-vars:1 */
/* eslint no-console:0, semi: 2 */
'use strict';

var q_http = require("q-io/http");

function parseJSON(buffer) {
    var json = JSON.parse(buffer);
    console.log(json);
}

var promise = q_http.read('http://localhost:1337');
promise.then(parseJSON).catch(console.log);

// this is the official solution
/*
qhttp.read("http://localhost:1337")
    .then(function (json) {
      console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done()
*/
