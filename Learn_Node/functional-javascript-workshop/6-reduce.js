/*
    Given an Array of strings, use Array#reduce to create an object 
    that contains the number of times each string occured in the array. 
    Return the object directly (no need to console.log).
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

module.exports = function countWords(inputWords) {
    var countedWords = inputWords.reduce(function (allWords, word){
        if (word in allWords){
            allWords[word]++;
        }
        else {
            allWords[word] = 1;
        }
        return allWords;
    }, {});  // second argument to reduce initialises countedWords to {}
    return countedWords;
  }

