/*
    let numbers = [1, 2, 3];
    let [foo, bar] = numbers;
    console.log(foo); // 1
    console.log(bar); // 2
    
    let numbers = [1, 2, 3];
    let data = {};
    [data.foo, data.bar] = numbers;
    console.log(data); // { foo: 1, bar: 2 }
    
    let numbers = [1, 2, 3];
    let [foo, , baz] = numbers; // I don't need the second element
    console.log(foo); // 1
    console.log(baz); // 3
    
    let box = {width: 10, height: 5, depth: 4};
    let {width: x, depth} = box;
    console.log(x, depth); // 10 4
    //but
    console.log(width); // ReferenceError: width is not defined
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

let args = process.argv.slice(2);

let data = {};
[ ,data.username, data.email] = args;

console.log(data);