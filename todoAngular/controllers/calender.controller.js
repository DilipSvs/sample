'use strict';

angular.module('TodoApp')

.controller('dateCtrl', function($scope) {
  
  $scope.openCalender = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };
});