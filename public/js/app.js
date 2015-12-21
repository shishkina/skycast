'use strict';

let app = angular.module('skyCast', [
  'ui.router'])
.factory('User', ['$http'], User)
.controller('loginController', ['User', '$state'], loginController)
.controller('navBarController', ['User', '$state', '$http'], navBarController)
