'use strict';

var TodoCtrl = function($scope, $rootScope, $state, $stateParams, $timeout, $mdSidenav) {
	'ngInject';
	
	console.log('TodoCtrl');
	
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};
	
	$scope.models = {
		selected: null,
		todoLists: [],
		allowedTypes: ['list'],
	};

	$scope.addTodoList = function() {
		$scope.models.todoLists.push(
			{
				label: 'New todo list (' + $scope.models.todoLists.length + ')',
				type: 'list',
				allowedTypes: ['item'],
				items: [{label: 'item 1', type: 'item'}, {label: 'item 2', type: 'item'}]
			}
		);
	};
	
	$scope.clearAllTodoList = function() {
		$scope.models.todoLists = [];
	};
	
	$scope.addNewRow = function(list) {
		list.items.push({label: 'new row', type: 'item'});
	};
	
	$scope.clearList = function(list) {
		list.items = [];
	};
	
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};

};

module.exports = TodoCtrl;