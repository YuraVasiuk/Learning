/*
    For each element of the array do something 
    (you can specify the index of the processed element as the second parameter).

    The forEach() method executes a provided function once for each array element.
*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(function (element, index){
    console.log(`[${index}] => single = ${element}, double = ${element * 2}`);
});

