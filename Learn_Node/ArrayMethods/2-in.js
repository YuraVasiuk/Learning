/*
    Now, as I have my arrays, it is just a handy way see if the thing's property is in it.
    I can also check properties in objects.

    The in operator returns true if the specified property is 
    in the specified object or its prototype chain.
*/

var words = ['The', 'word', 'is', 'somewhere', 'here'];
if (1 in words){
    console.log('The word is IN words');
}

var cars = {make: 'Acura', model: 'RDX', year: 2015};
if ('make' in cars && 'model' in cars && 'year' in cars){
    console.log('My car is IN cars');
}
