/*
    In Node, almost everything is an array.  Well, if something is not, here is how to
    turn it into array.  Havin done that, 
    you can apply the rich Node array-methods library on it.
    
    The Array.from() method creates a new Array instance 
    from an array-like or iterable object.  
*/

var letters = "I will turn this string into the array of characters";
var arr = Array.from(letters);
console.log(arr);

// I can also pass a method as an argument, 
// to do some operation on every element while truning the thing into the array.
var char_numbers = "12345";
var arr1 = Array.from(char_numbers, n => n + 3);
console.log(arr1);

// I can specify the length of the array as the first argument
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined` and in this case it is math addition,
// not just concatenation.
var arr2 = Array.from({length: 7}, (value, index) => index + 3);
console.log(arr2);

