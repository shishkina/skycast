'use strict';

angular.module('skyCast', [
  'ui.router',
])
  .factory('User', ['$http'], User)
  .controller('loginController', loginController)
  .controller('navController', navController)

  loginController.$inject = ['User','$state'];
  navController.$inject = ['User', '$state', '$http'];
