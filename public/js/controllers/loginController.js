'use strict';
// angular.module('skyCast').controller('LoginController', LoginController)
//
// LoginController.$inject = ['User','$state','$http'];

function LoginController($http, $state, User) {
  let self = this;

  self.logInUser = {
    email: '',
    password: ''
  }

  self.logIn = function() {
    $http({
      method: 'POST',
      url: '/user/login',
      data: self.logInUser,
      headers: {'Content-Type': 'application/json'}
    }).then( (data) => {
      //validate for proper user login, if not redirect back.
      debugger;
    })
  }


}
