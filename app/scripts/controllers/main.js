'use strict';

angular.module('gumballApp')
  .controller('MainCtrl', [ '$http', '$scope', function ($http,$scope) {

    //setting url that has been created through backend mock
  	var url = '/gumballs';

  	// example emailadresses that I would get from a database 
  	var existingEmails = ["li-nee@gmx.de",'pipapo@gmx.de']; 

  	// model for email that will be defined by user
    // intitialising array for postrequest response and errormessagetext   
    $scope.email = "";
    $scope.balls = [];
    $scope.angry = "";

    // add email to example emailadresses
    function saveInput(email){
      existingEmails.push(email);
      return existingEmails;
    }

    // method that is called by clicking on submitbutton
  	$scope.sendData = function(email){

      // checking if emailadress is in array (would also be done in the backend in real life)
      // if it´s a valid emailadress here only with type="email" from HTML5
      if(existingEmails.indexOf(email) === -1 && email.length>=1 ){

        //emptying error-message in case it´s still showing from a previous input
        $scope.angry = "";

        // making post to mocked backend, passing email from userinput,
        // if input is correct the response will be shown below the input tag 
        // as simple p
        $http.post(url, email).success(function(response){
          $scope.balls = response;
        });
        saveInput(email);

  		} else {
  			$scope.angry = "Liar!"; 
  		}

  	};


  }]);
