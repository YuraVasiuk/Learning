/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0, semi: 2*/

/*
In Scopes we covered how usage of var or let dictates the scope of thetion without callback is deprecated.
variable being defined. When assigning a variable without using either of var,
let, etc, the variable is assumed to exist in an outer scope.
C:\Users\IuriiVasiuk\Documents\Learning\Learn_Node\scope-chains-closures>scope-chains-closures
The javascript runtime follows these steps to assign a variable:

 1) Search within the current scope.
 2) If not found, search in the immediately outer scope.
 3) If found, go to 6.
 4) If not found, repeat 2. Until the Global Scope is reached.
 5) If not found in Global Scope, create it (on window / global objects).
 6) Assign the value.
*/

function foo() {
    var bar;
    quux = 2;

    function zip() {
        var quux = 1;
    }
}
