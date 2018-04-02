/*
    Return a function that takes a list of valid users, 
    and returns a function that returns true if all of the supplied users exist 
    in the original list of users
*/

/*eslint-env node, es6*/
/*eslint no-unused-vars:1*/
/*eslint no-console:0*/

module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(submittedUser) {
        return goodUsers.some(function(goodUser) {
          return goodUser.id === submittedUser.id
        })
      })
    }
  }