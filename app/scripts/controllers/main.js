'use strict';

angular.module('gumballApp')
  .controller('MainCtrl', [ 'loadData', '$http', function (loadData,$http) {

  	var url = 'gumballs/blue-gum-bubble.json';

  	$http.get(url).success(function(data){
  		console.log(data);

  	});


  }]);
