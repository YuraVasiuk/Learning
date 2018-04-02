/*
    Now, I need all people who are younger then 65.

    The filter() method creates a new array with all elements 
    that pass the test implemented by the provided function.
*/

var people_ages = [];
for (var i = 0; i < 100; i++){
    people_ages.push(Math.floor(Math.random() * (100 - 0 + 1) + 0));
}
console.log(`Here are all people ages:\n${people_ages}\n`);

var younger_then_fifty = people_ages.filter(age => age < 50);
console.log(`Here are the ages younger then 50:\n${younger_then_fifty}`);
console.log(`${younger_then_fifty.length} people.`);