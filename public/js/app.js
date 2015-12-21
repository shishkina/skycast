'use strict';

angular.module('skyCast', [
  'ui.router',
])
  .factory('User', ['$http'], User)
  .controller('loginController', loginController)
  .controller('navController', navController)
  .controller('searchController', searchController)

  loginController.$inject = ['User','$state'];
  navController.$inject = ['User', '$state', '$http'];
  searchController.$inject = ['User', '$state', '$http'];
