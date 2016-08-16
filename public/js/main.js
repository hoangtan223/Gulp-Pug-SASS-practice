angular.module('ToDoApp', []).controller('ToDoController', [
  $scope, function($scope) {
    $scope.taskToDo = [];
    $scope.error = false;
    return $scope.addTask = function(task) {
      if (!task) {
        return $scope.error = true;
      } else {
        $scope.taskToDo.push(task);
        $scope.newTask = '';
        return $scope.error = false;
      }
    };
  }
]);
