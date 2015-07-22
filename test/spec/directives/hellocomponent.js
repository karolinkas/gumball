'use strict';

describe('Directive: helloComponent', function () {

  // load the directive's module
  beforeEach(module('gumballApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hello-component></hello-component>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the helloComponent directive');
  }));
});
