'use strict';

angular.module('gumballApp')
  .factory('loadData', function ($http) {
    var promise = null;
    
    //checking for answer to request
    return function(url) {
      if (promise) {
        return promise;
      } else {
        promise = $http.get(url);
        return promise;
      }
    };

  });