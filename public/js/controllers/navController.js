
'use strict';

console.log('navbar loaded');

function NavController($http, $state, User) {
  let self = this;

  self.logOut = function() {
    $http.defaults.headers.common.Authorization = '';

    User.setCurrentUser( {} );
    User.setLoginState(false);
    $state.go('home');
  }

  self.goHome = function() {
    $state.go('home');
  }

  self.signUp = function() {
    $state.go('signUp');
  }

  self.logIn = function() {
    $state.go('login');
  }
}
