describe("Controller: dateCtrl", function() {

  var scope, controller;
  beforeEach(module('TodoApp')) ;
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('dateCtrl', {$scope: scope});
  }));

  it('expect controller to open', function(){
    expect(scope.openCalender).toBeDefined();
  //
    event = jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation']);
    scope.openCalender(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(scope.opened).toBeTruthy();
  });
});