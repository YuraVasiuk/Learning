/*
    Sort simply (default), or with the function (by adding the function
    as a parameter).

    The sort() method sorts the elements of an array in place and returns the array. 
    The sort is not necessarily stable. 
    The default sort order is according to string Unicode code points.
    (compareFunction) parameter specifies a function that defines the sort order.
*/

// default
var arr = [34, 22, 5, 136, 44];
var sorted = arr.sort();
console.log(`Sorted by the first character (default) => ${sorted}`);

// with compareFunction
function compare(str1, str2){
    if (str1.length < str2.length){
        return -1;
    }
    if (str1.length > str2.length){
        return 1;
    }
    return 0;
}
var strings = ['forty one', 'twenty one', 'twenty four', 'forty four', 'twenty six'];
var sorted_by_length = strings.sort(compare);
console.log(`Sorted by the length of the strings (compareFunction) => ${sorted_by_length}`);