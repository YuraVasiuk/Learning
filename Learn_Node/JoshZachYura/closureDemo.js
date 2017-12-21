/* eslint-env node*/
/* eslint no-console: 0, semi: 2 */

var num1 = 3;
var num2 = 3;

function F(passedIn) {
    var val = 5;
    var fun = function () {
        return val + passedIn;
    };
    return fun;
}

var theReturnedfunction1 = F(1);
console.log(theReturnedfunction1);
var theReturnedfunction2 = F(2);

num1 += theReturnedfunction1();
num2 += theReturnedfunction2();

console.log(num1);
console.log(num2);
