/* eslint-env node, es6 */
/* eslint no-unused-vars:1 */
/* eslint no-console:0, semi: 2 */
'use strict';
var q_http = require("q-io/http");

function make_request(url) {
    return q_http.read(url);
}

function to_string(buffer) {
    return buffer.toString('utf8');
}

function make_url(id) {
    return 'http://localhost:7001/' + id;
}

function parse_json(buffer) {
    return JSON.parse(buffer);
}

Promise.resolve(make_request('http://localhost:7000'))
    // the firs line could also be this
    // make_request('http://localhost:7000')
    .then(to_string)
    .then(make_url)
    .then(make_request)
    .then(parse_json)
    .then(console.log)
    .catch(console.log);

// !!! it is good to have the OFFICIAL SOLUTION for comparison
/*
var qhttp = require('q-io/http');

    qhttp.read("http://localhost:7000/")
    .then(function (id) {
      return qhttp.read("http://localhost:7001/" + id);
    })
    .then(function (json) {
      console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done();
*/

async function hi() {
    try {
        while (i < 5) {

            var hi = await q_http.read(url);
            var hi2 = await q_http.read(hi + 'asdfa');
            i++;
        }
    } catch (e) {

    }

}

hi();
console.log('11');
