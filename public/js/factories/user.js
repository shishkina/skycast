'use strict';

function User($http) {

//private variables and functions
  let currentUser = {};
  let loginState = false;

  return {
    verifyToken: function() {

    },

    setCurrentUser: function(user) {
      currentUser = user;
    },

    getCurrentUser: function() {
      return currentUser;
    },

    setUserForLogin: function(user) {
      userForLogin = user;
    },

    getUserForLogin: function() {
      return userForLogin;
    },

    setLoginState: function(newState) {
      loginState = newState;
    },

    getLoginState: function() {
      return loginState;
    }
  }
}
