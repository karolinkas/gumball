'use strict';

angular.module('gumballApp')
  .controller('MainCtrl', [ 'loadData', '$http', '$scope', function (loadData,$http,$scope) {

  	var url = '/gumballs';


  	$scope.email = "heho"; 


  	$http.get(url).success(function(data){
  		console.log(data);
  	});

  	$scope.sendData = function(message){
  		$http.post(url, message).success(function(dataReturn){
  			console.log(dataReturn);
  		});
  	};


  }]);
