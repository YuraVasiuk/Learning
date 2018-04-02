/*
    Shift, or just pop from the beginning.

    The shift() method removes the first element from an array and returns that removed element. 
    This method changes the length of the array.
*/

var arr = ['first', 'second', 'third', 'forth', 'fifth'];
var shifted_item = arr.shift();
console.log(`My ${arr} just lost the ${shifted_item}`);