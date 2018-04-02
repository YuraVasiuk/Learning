/*
    Just an easy way to find element in the array
    (the second optional argument will spesiphy the index to start at).

    The includes() method determines whether an array includes a certain element, 
    returning true or false as appropriate.
*/

var words = ['this', 'array', 'has', 'some', 'words', 'in', 'it'];

var answer1 = words.includes('has');
console.log(`Does my array have 'has'? ${answer1}`);
var answer2 = words.includes('has', 3);
console.log(`Does my array have 'has' in the first three elements? ${answer2}`);