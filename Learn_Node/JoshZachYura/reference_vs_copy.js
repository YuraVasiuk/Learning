/*eslint-env node*/
/*eslint no-console:0, no-unused-vars:0*/
function messWith(hi, bool, thisIsAString) {
    hi = 10;
    bool = false;
    thisIsAString = "goodbye";
}

var hi = 5,
    thisWasTrue = true,
    thisIsAString = 'hi';
console.log(hi)
console.log(thisWasTrue)
console.log(thisIsAString)

messWith(hi, thisWasTrue, thisIsAString)
console.log(hi)
console.log(thisWasTrue)
console.log(thisIsAString)

/*******************************/
console.log('************************')
/*******************************/
function messWith2(hi) {
    hi.val = 10;
    hi.bool = false;
    hi.str = "goodbye";
}

var hi2 = {
    val: 5,
    bool: true,
    str: 'hi'
};
console.log(hi2)

messWith2(hi2)
console.log(hi2)
