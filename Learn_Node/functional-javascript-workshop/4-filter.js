/*
    Use Array#filter to write a function called getShortMessages.
    getShortMessages takes an array of objects with '.message' properties 
    and returns an array of messages that are less than < 50 characters long.
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

module.exports = function getShortMessages(messages) {
    var filtered_array = messages
        .filter(element => element.message.length < 50)
        .map(el => el = el.message);
    
    return filtered_array;
}