/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

function one(callback) {

    // do something

    callback(); // this is the same as putting the beneath code

    //function () {
    //    console.log('something');
    //}

}

one(function () {
    console.log('something');
});
