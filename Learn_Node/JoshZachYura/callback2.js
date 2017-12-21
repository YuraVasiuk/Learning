/*eslint-env node*/
/*eslint no-console:0*/


function one(callback) {

    console.log('first');
    callback();
}

function oneCallback() {

    console.log('second');
}

one(oneCallback);
