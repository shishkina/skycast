angular.module('skyCast')
  .config(AppRouter);

  function AppRouter($stateProvider, $urlRouterProvider, $httpProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        tempalteUrl: 'js/templates/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'js/templates/login.html'
      })
      .state('signUp', {
        url: '/signup',
        templateUrl: 'js/templates/signup.html'
      })

  }
