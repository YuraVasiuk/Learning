/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

function repeat(operation, num) {
  if (num <= 0){ 
      return operation();
  }
  return repeat(operation, --num);
}

module.exports = repeat;