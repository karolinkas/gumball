'use strict';

angular.module('gumballApp')
  .directive('helloComponent', function (reactDirective) {
    return reactDirective('HelloComponent');
  });
