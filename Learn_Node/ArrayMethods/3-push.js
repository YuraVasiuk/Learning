/*
    Enhanced push can add to the array a number of elements,
    or push.apply() together two arrays.

    The push() method adds one or more elements to the end of an array 
    and returns the new length of the array.
*/

var cities = ['Seattle', 'San Fransisco', 'LA'];
var num_cities = cities.push('Portland', 'San Diego');
console.log(`I have ${num_cities} cities now`);

var more_cities = ['Boston', 'NY', 'Washington'];
var all_cities = cities.push.apply(cities, more_cities);
console.log(`I have ${all_cities} cities now`);