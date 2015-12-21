angular.module('skyCast')
  .config(AppRouter);

  function AppRouter($stateProvider, $urlRouterProvider, $httpProvider){

    //$urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/templates/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'js/templates/login.html',
      })
      .state('signUp', {
        url: '/signup',
        templateUrl: 'js/templates/signup.html'
      })
      .state('logout', {
        url: '/signout',
        templateUrl: 'js/templates/signout.html'
      })
      .state('profile', {
        url: '/profile',
        tempalteUrl: 'js/templates/signout.html'
        data: {
          requiresLogin: true
        }
      })

  }
