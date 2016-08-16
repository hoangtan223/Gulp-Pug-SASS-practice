angular.module('ToDoApp', [])
	.controller 'ToDoController', [$scope, ($scope) ->
		$scope.taskToDo = []
		$scope.error = false
		$scope.addTask = (task) ->
			if not task
				$scope.error = true
			else
				$scope.taskToDo.push(task)
				$scope.newTask = ''
				$scope.error = false
]