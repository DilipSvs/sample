
describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('TodoApp'));

  var mainController,
    scope,
    lsFactory,
    todos;

  // Initialize the controller and mocks
  beforeEach(inject(function ($controller, $rootScope, _lsFactory_) {
    todos = []; //clear the todos before each test
    scope = $rootScope.$new();
    lsFactory = _lsFactory_;

    //mock localStorageService get/add
    spyOn(lsFactory,'get').and.callFake(function(){
      //return [{ 'name': 'Cali Roll', 'fish': 'Crab', 'tastiness': 2, 'date':new Date('3/13/2009') }]
      return todos;
    });
    spyOn(lsFactory,'put').and.callFake(function(todo){
      todos.push(todo) ;
    });

    //Instantiate controller to test
    mainController = $controller('mainController', {
      $scope: scope,
      lsFactory: lsFactory
    });
  }));
  
  afterEach(function () {
    todos = [];
  });

  it('should retrieve "todos" from the store and assign to scope', function () {
    expect(lsFactory.get).toHaveBeenCalled();
    //expect(scope.todos.length).toBe(4);
  });
  
  it('add todos', function() {
    todo = [{ name: 'sample', type: 'medium', date:new Date('3/13/2009') }];
    scope.newTaskTodo = 'addTest';
    scope.parent.newTaskDate = '5/10/2009';
    /*var LS_ID = 'todos-ls-element';
    lsFactory.put(LS_ID,JSON.stringify(todos));
    expect(lsFactory.get()[0].name).toBeDefined()
    expect(lsFactory.get().length).toBeGreaterThan(0);*/
    expect(scope.todos.length).toEqual(0);
    scope.addTodo();
    expect(scope.todos.length).toEqual(1);
  });
  
  it('remove todos', function(){
    scope.todos = [{ name: 'sample', type: 'medium', date:new Date('3/13/2009') }];
    var index = 0;
    expect(scope.todos.length).toEqual(1);
    scope.removeTodoItem(index);
    expect(scope.todos.length).toEqual(0);
  });
  
  it('get total item', function(){
    scope.getTotalTodos();
    expect(scope.todos.length).toBeDefined();
  })
  
});

/*todos = [
      { name: 'Cali Roll', fish: 'Crab', tastiness: 2, date:new Date('3/13/2009') },
      { name: 'Philly', fish: 'Tuna', tastiness: 4, date:new Date('1/3/2002') },
      { name: 'Tiger', fish: 'Eel', tastiness: 7, date:new Date('6/17/1989') },
      { name: 'Rainbow', fish: 'Variety', tastiness: 6, date:new Date('10/27/2013') }
    ];
describe("TodoApp", function() {
  var scope;
  
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('mainController', {$scope: scope});
  }));
  
  it('sdfdsf', function(){
    spyOn(scope, 'TodoApp').andCallThrough();
    scope.addNewTodo('sampler');
    expect(scope.addNewTodo).toHaveBeenCalled();
  })
});*/