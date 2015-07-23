'use strict';

angular
  .module('gumballApp', [
    'ngAnimate', 'ngRoute', 'ngMockE2E', 'react'
  ])
  .config(function ($routeProvider) {
     $routeProvider
       .when('/', {
         templateUrl: 'views/main.html',
         controller: 'MainCtrl'
       })
       .otherwise({
         redirectTo: '/'
       });
   })
  .run(function($httpBackend) {
      var balls = [{
                    "data": {
                      "id": 12341,
                      "type": "gumball",
                      "attributes": {
                        "color": "Blue",
                        "flavor": "Bubble Gum",
                        "description": "Yummy, yummy, Bubble Gummy! You got a Bubble Gum flavored gumball, you lucky dog."
                      }
                    }
                  }, 
                  {
                  "data": {
                    "id": 12342,
                    "type": "gumball",
                    "attributes": {
                      "color": "Red",
                      "flavor": "Bitter Tomato",
                      "description": "Oh boy - everyone's favorite refreshing treat has rolled out of the machine and into your lucky hand!"
                    }
                  }
                }];


      // adds a new ball to the balls array
      $httpBackend.whenPOST('/gumballs').respond(balls);

      $httpBackend.whenGET('/gumballs').respond(balls);

      $httpBackend.whenGET(/main/).passThrough();


});
