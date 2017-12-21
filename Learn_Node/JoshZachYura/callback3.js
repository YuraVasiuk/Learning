/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

function one(callback) {

    var num1 = 5;
    var num2 = 22;
    var result = num1 + num2;

    // now I can use any of the variables in the call to one()
    callback(num1, num2, result);

    return num1;
}

// usual way of using return
var sss = one(function () {});
console.log(sss);

one(function (someNum1, someNum2, someNum3) {
    console.log(someNum1);
    console.log(someNum2);
    console.log(someNum3);
});
