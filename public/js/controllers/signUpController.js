'use strict';

function SignupController($http, $state, User) {
  let self = this;

  self.signupUser = {
    userName: '',
    email: '',
    password: '',
    queries: [],
  }

  self.signup = function() {
    $http({
      method: 'POST',
      url: '/user/new',
      data: self.signupUser,
      headers: {'Content-Type': 'application/json'}
    }).then( (user) => {
      if (success === true) {
        $state.go('login');
      }
      else {
        $state.go('signup');
      }
    });
  }
}
