/*
    This method is more complex and interesting than either one on
    my list. Something is done on every element and put into the reducer.
    The reducer is returned.

    The reduce() method applies a function against an accumulator 
    and each element in the array (from left to right) 
    to reduce it to a single value.
*/

var arr1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arr2 = [1, 2, 3, 3, 3, 4, 4, 9, 9, 9, 9, 5, 5, 1, 7, 6, 8, 8, 8, 8, 0];

// #1 (the first element of the array is picked as a reducer by default)
var reduced_value1 = arr1.reduce((accumulator, element) => accumulator += element);
console.log(reduced_value1);

// #2 (the reducer is specified as the last parameter)
var reducer = 'reducer: ';
var reduced_value2 = arr1.reduce((accumulator, element) => {
    return accumulator += element;
}, reducer);
console.log(reduced_value2);

// #3 (remove duplicate items and sort an array)
var sorted_set = arr2.sort().reduce((accumulator, element) => {
    const length = accumulator.length;
    // collect the element if it first in the array, 
    // or if it is a new value and put it into the right place (length - 1) 
    if (length === 0 || accumulator[length - 1] !== element){
        accumulator.push(element);
    }
    return accumulator;
}, []); // the square brackets just make the reducer array
console.log(sorted_set);