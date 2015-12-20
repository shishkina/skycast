'use strict';

let app = angular.module('skyCast', [
  'ui.router'])
.factory('User', ['$http'], User)
