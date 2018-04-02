/*
    Arrow functions help to make the confounding issue of this less confounding. Arrow functions lexically bind the value of this.  
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

var foot = {
        kick: function () {
            this.yelp = "Ouch!";
            setImmediate(() => console.log(this.yelp));
        }
    };
foot.kick();

/*
 In ES5, you might work around this with hacks like:
    setImmediate(function () {
        console.log(this.yelp);
    }.bind(this));

or even
    var that = this;
    setImmediate(function () {
        console.log(that.yelp);
    });
*/