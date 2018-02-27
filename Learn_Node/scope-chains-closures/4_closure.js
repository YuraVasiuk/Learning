/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0, semi: 2*/

function foo() {
    var bar;
    quux = 2;

    function zip() {
        var quux = 1;
        bar = true;
    }

    return zip;
}
