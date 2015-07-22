'use strict';

angular
  .module('gumballApp', [
    'ngAnimate', 'ngRoute'
  ])
  .config(function ($routeProvider) {
     $routeProvider
       .when('/', {
         templateUrl: 'views/main.html',
         controller: 'MainCtrl'
       })
       .when('/gumballs', {
         templateUrl: 'files/blue-gum-bubble.json',
         controller: 'MainCtrl'
       })
       .otherwise({
         redirectTo: '/'
       });
   });
