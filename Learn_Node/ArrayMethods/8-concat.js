/*
    Just concatenate them.

    The concat() method is used to merge two or more arrays. 
    This method does not change the existing arrays, but instead returns a new array.
*/

var arr1 = [1, 2, 3], arr2 = [4, 5, 6], arr3 = [7, 8, 9];

var concatenated_arr = arr1.concat(arr2, arr3);
console.log(`Used for concatenating: ${arr1} - ${arr2} - ${arr3}`);
console.log(`Newly created ${concatenated_arr}`);
