'use strict';

angular.module('TodoApp')

.controller('mainController', [ '$scope', 'lsFactory', '$filter', 
  function( $scope, lsFactory, $filter ) {
    /**
    * scope value data list of data to be displayed
    */
    $scope.todos = lsFactory.get();//get the value from local storage
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchTodo   = '';     // set the default search/filter term
    //$scope.parent = {newTaskDate:''}; //set the date
    //$scope.newTaskType  = 'normal';
    resetInput();
    
   /**
    * watches the changes in the todos array
    * @param {Number} NewTodo item which contains new value
    * @param {Number} oldTodo item which contains previous value
    */
    $scope.$watch("todos",function (newTodo,oldTodo) {
      if (newTodo !== null && angular.isDefined(newTodo) && newTodo!==oldTodo) {
        //lsFactory.put(newTodo);
      }
    },true);
    
    /**
     * add the entered text into todos array
     * after todos array gets updated values of todotask(textbox), date(datePicker), type(dropdown) are reset
     */
    $scope.addTodo = function(){
      var d = ($filter('date')($scope.parent.newTaskDate,'dd/MM/yyyy'));
      //console.log(d)
      if(typeof $scope.newTaskTodo !== 'undefined' && $scope.newTaskTodo !== ''
        && typeof $scope.parent.newTaskDate !== 'undefined' && $scope.parent.newTaskDate !== ''
        ){
        //var c = $scope.newTaskDate.trim().split("/");
        //var dateSort = new Date(c[1]+"/"+c[0]+"/"+c[2]);
        $scope.todos.push({task:$scope.newTaskTodo.trim(), date:d, type:$scope.newTaskType});
        //console.log($scope.todos)
        //lsFactory.put($scope.todos);
        resetInput();
      }
    };
    
    /**
     * remove a selected item 
     * @param {Number} item selected item in todos array
     */
    $scope.removeTodoItem = function(item){
      $scope.todos.splice(item, 1);
    };
    
    /**
     * get total number of todo item in todos array
     * @returns {Number} 0 or length of array
     */
    $scope.getTotalTodos = function(){
      if ($scope.todos == null) return 0;
      return $scope.todos.length;
    };
    
    /**
     * reset the input values
     */
    function resetInput(){
      $scope.newTaskTodo = '';
      $scope.parent = {newTaskDate:''}; //set the date
      $scope.newTaskType  = 'normal';
    }
}]);