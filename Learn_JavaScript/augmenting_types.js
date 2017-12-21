/* eslint-env node */
/* eslint no-console: 0, semi: 1 */
/*eslint no-unused-vars: 1 */

// AUGMENTING TYPES
// JUST TO PLAY WITH MODIFYING BUILT-IN TYPES

// #1 -- augment the prototype for all functions
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

// #2 -- define the method for Number based on the above augmenting
Number.method('times2', function () {
    return this * 2;
});

// #3 -- use the defined above method
var number = 5;
console.log(number.times2());
