'use strict';

angular.module('skyCast', [
  'ui.router',
])
  .factory('User', User)
  .controller('LoginController', LoginController)
  .controller('NavController', NavController)
  .controller('SignupController', SignupController)
  //.controller('searchController', searchController)
  .run(['$rootScope','$state','User', 'Restaurant', function($rootScope, $state, User, Restaurant) {

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      let isAuthenticationRequired = toState.data
        && toState.data.requiresLogin
        && !User.getLoginState();

      if (isAuthenticationRequired) {
        event.preventDefault();
        $state.go('login');
      }
    })
  }]);


  User.$inject = ['$http','$state'];
  SignupController.$inject = ['$http', '$state', 'User'];
  LoginController.$inject = ['$http', '$state', 'User'];
  NavController.$inject = ['User', '$state', '$http'];
  //searchController.$inject = ['User', '$state', '$http'];
