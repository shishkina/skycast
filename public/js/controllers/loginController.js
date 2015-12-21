'use strict';
// angular.module('skyCast').controller('LoginController', LoginController)
//
// LoginController.$inject = ['User','$state','$http'];

function LoginController(User, $state, $http) {
  let self = this;

  self.logInUser = {
    email: '',
    password: ''
  }

  self.logIn = function() {
    $http({
      method: 'POST',
      url: '/users/login',
      data: self.logInUser,
      headers: {'Content-Type': 'application/json'}
    }).then( (data) => {
      //validate for proper user login, if not redirect back.
      debugger;
    })
  }


}
