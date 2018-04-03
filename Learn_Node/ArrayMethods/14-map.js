/*
    Do something with every element of the array 
    (map a functionality to every element).

    The map() method creates a new array with the results of calling 
    a provided function on every element in the calling array.
*/

var strings = ['this is first string',
                'this is second string',
                'this is third string'];

var new_strings = 
    strings.map(string => string.replace('this', 'that'));

console.log(new_strings);