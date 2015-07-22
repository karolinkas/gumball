'use strict';

angular.module('gumballApp')
  .factory('loadData', function ($http) {
    var promise = null;
    
    //checking for answer to request
    return function(url,data) {
      if (promise) {
        return promise;
      } else {
        promise = $http.post(url,data);
        return promise;
      }
    };

  });