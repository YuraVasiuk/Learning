/*
    Unshift, or push to the beginning.

    The unshift() method adds one or more elements to the beginning of an array 
    and returns the new length of the array.
*/

var cities = ['Seattle', 'San Fransisco', 'LA'];
var num_cities = cities.unshift('Portland', 'San Diego');
console.log(`I have ${num_cities} cities now`);

var more_cities = ['Boston', 'NY', 'Washington'];
var all_cities = cities.unshift.apply(cities, more_cities);
console.log(`I have ${all_cities} cities now\nand here they are: ${cities}`);