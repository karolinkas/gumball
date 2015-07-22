'use strict';

angular.module('gumballApp')
  .controller('MainCtrl', [ 'loadData', '$http', '$scope', function (loadData,$http,$scope) {

  	var url = '/gumballs';

  	var existingEmails = ["li-nee@gmx.de",'pipapo@gmx.de']; 
  	$scope.email = ""; 
  	$scope.balls = [];
  	//color,flavour,description 


  	$scope.sendData = function(email){

  		if(existingEmails.indexOf(email) === -1){

	  		$http.post(url, email).success(function(dataReturn){
	  			$scope.balls = dataReturn[0];
	  			console.log($scope.balls);
	  		}).error(function(){

	  		});

  		} else {
  			
  			console.log("Liar! You exist twice.");
  		}

  	};


  }]);
