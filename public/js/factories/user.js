'use strict';

function User($http) {

//private variables and functions
  let currentUser = {};
  let userForLogin = {};

  return {
    verifyToken: function() {

    }

    setCurrentUser: function(user) {
      currentUser = user;
    }

    getCurrentUser: function() {
      return currentUser;
    }

    setUserForLogin = function(user) {
      userForLogin = user;
    }

    getUserForLogin = function() {
      return userForLogin;
    }
  }

}
