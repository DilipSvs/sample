'use strict';

angular.module('TodoApp')

.factory('lsFactory', function() {
  var LS_ID = 'todos-ls-element';
  
  return {
    get: function () {
      return JSON.parse(localStorage.getItem(LS_ID) || '[]');
    },

    put: function (todos) {
      localStorage.setItem(LS_ID, JSON.stringify(todos));
    }
  };
});