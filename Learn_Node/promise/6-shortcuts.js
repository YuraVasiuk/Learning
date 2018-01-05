/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/
'use strict';

var promise = Promise.reject(new Error('SECRET VALUE'));

promise.catch(console.log);
