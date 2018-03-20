/*
    fn`Hello ${you}! You're looking ${adjective} today!`
    fn(["Hello ", "! You're looking ", " today!"], you, adjective);
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(username, comment) {
    var safe_string = username + comment;
    
    return safe_string;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
