/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

function PrintStuff(myDocuments) {
    this.documents = myDocuments;
}

// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
PrintStuff.prototype.print = function () {
    console.log(this.documents);
}


function printStuffNotClass(myDocuments) {
    return {
        documents: myDocuments,
        print: function () {
            console.log(this.documents);
        }
    };
}

var notClass1 = printStuffNotClass('I am a new Object and I can print but I didn\'t use a class.')
var notClass2 = printStuffNotClass('I am a new Object and I can print but I didn\'t use a class.')
notClass1.print();
notClass2.print();
// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
var newObj1 = new PrintStuff("I am a new Object and I can print.");
var newObj2 = new PrintStuff("I am a new Object and I can print.");
var newObj3 = new PrintStuff("I am a new Object and I can print.");
var newObj4 = new PrintStuff("I am a new Object and I can print.");
var newObj5 = new PrintStuff("I am a new Object and I can print.");
var newObj6 = new PrintStuff("I am a new Object and I can print.");

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
newObj1.print(); //I am a new Object and I can print.
console.log(newObj1 instanceof PrintStuff)
