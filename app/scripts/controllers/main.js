'use strict';

angular.module('gumballApp')
  .controller('MainCtrl', [ 'loadData', function (loadData) {

  	var url = '/files/blue-gum-bubble.json';

  	loadData(url).success(function(data){
  		console.log(data);

  	});


  }]);
