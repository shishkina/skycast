'use strict';

angular.module('skyCast', [
  'ui.router',
])
  .factory('User', User)
  .controller('LoginController', LoginController)
  .controller('NavController', NavController)
  //.controller('searchController', searchController)

  User.$inject = ['$http','$state']
  LoginController.$inject = ['User','$state'];
  NavController.$inject = ['User', '$state', '$http'];
  //searchController.$inject = ['User', '$state', '$http'];
