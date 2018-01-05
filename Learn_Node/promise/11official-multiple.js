/* eslint-env node, es6 */
/* eslint no-unused-vars:1 */
/* eslint no-console:0, semi: 2 */

'use strict';

/* global getPromise1, getPromise2 */

function all(a, b) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var out = [];

        a.then(function (val) {
            out[0] = val;
            counter++;

            if (counter >= 2) {
                fulfill(out);
            }
        });

        b.then(function (val) {
            out[1] = val;
            counter++;

            if (counter >= 2) {
                fulfill(out);
            }
        });
    });
}

all(getPromise1(), getPromise2())
    .then(console.log);
