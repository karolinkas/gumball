'use strict';

angular.module('gumballApp')
  .controller('MainCtrl', [ 'loadData', '$http', '$scope', function (loadData,$http,$scope) {

  	var url = '/gumballs';

  	//emailadressses that I would get from a database, that exist already
  	var existingEmails = ["li-nee@gmx.de",'pipapo@gmx.de']; 

  	$scope.email = ""; 
  	$scope.balls = [];
  	$scope.angry = "";
  	
    $scope.person = { fname: 'Clark', lname: 'Kent' };


  	$scope.sendData = function(email){

  		if(existingEmails.indexOf(email) === -1 && email.length>=1 ){

  			$scope.angry = "";
	  		$http.post(url, email).success(function(dataReturn){
	  			$scope.balls = dataReturn;
	  			console.log($scope.balls);
	  		}).error(function(){

	  		});

  		} else {
  			$scope.angry = "Liar! I ate this already!"; 
  			console.log("Liar! I ate this already!");
  		}

  	};


  }]);
