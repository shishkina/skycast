'use strict';

angular.module('skyCast', [
  'ui.router',
])
  .factory('User', User)
  .controller('LoginController', LoginController)
  .controller('NavController', NavController)
  .controller('SignupController', SignupController)
  //.controller('searchController', searchController)

  User.$inject = ['$http','$state'];
  SignupController.$inject = ['$http', '$state', 'User'];
  LoginController.$inject = ['$http', '$state', 'User'];
  NavController.$inject = ['User', '$state', '$http'];
  //searchController.$inject = ['User', '$state', '$http'];
