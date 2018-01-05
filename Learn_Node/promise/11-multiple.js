/* eslint-env node, es6 */
/* eslint no-unused-vars:1 */
/* eslint no-console:0, semi: 2 */

'use strict';

function all(promise1, promise2) {
    var promise = new Promise(function (fulfill, reject) {
        var counter = 0;
        // I will need to get the data parts out of the promise1 and the promise2
        // and pass the data parts to the fulfill()
        var promise1Data, promise2Data;
        promise1.then(function (promise1DataIn) {
            counter++;
            promise1Data = promise1DataIn;
            // the one that gets up to counter 2 fires the fulfill() 
            // and the execution jumps to the 'return promise;' 
            if (counter === 2) {
                fulfill([promise1Data, promise2Data]);
                reject('rejected for some reason');
            }
        });
        promise2.then(function (promise2DataIn) {
            counter++;
            promise2Data = promise2DataIn;
            // the one that gets up to counter 2 fires the fulfill() 
            // and the execution jumps to the 'return promise;'
            if (counter === 2) {
                fulfill([promise1Data, promise2Data]);
                reject('rejected for some reason');
            }
        });
    });
    return promise;
}

all(getPromise1(), getPromise2())
    .then(console.log, console.log);

// real world approach to REMEMBER
/*
Promise.all([getPromise1(), getPromise2()])
      .then(onFulfilled, onRejected);
*/
