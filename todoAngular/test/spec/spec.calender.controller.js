describe("sortApp module", function() {
  beforeEach(module('TodoApp')) ;
  
  describe('date control test', function () {
    var scope, controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
        controller = $controller('dateCtrl', {$scope: scope});
      }));

    it('should controller', function(){
      expect(scope.openCalender).toBeDefined();
      //
      event = jasmine.createSpyObj('event', ['preventDefault', 'stopPropagation']);
      scope.openCalender(event);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(scope.opened).toBeTruthy();
    });
  });
});