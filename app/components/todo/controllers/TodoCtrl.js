'use strict';

var TodoCtrl = function($scope, $rootScope, $state, $stateParams, $timeout, $mdSidenav) {
	'ngInject';
	
	/**
	 * Init models
	 */
	$scope.models = {
		selected: null,
		todoLists: [],
		allowedTypes: ['list'],
	};
	
	/**
	 * Open sidebar
	 */
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};

	/**
	 * Add new TODO list
	 */
	$scope.addTodoList = function() {
		$scope.models.todoLists.push(
			{
				label: 'New todo list (' + $scope.models.todoLists.length + ')',
				type: 'list',
				allowedTypes: ['item'],
				items: []
			}
		);
	};
	
	/**
	 * Clear all TODO lists
	 */
	$scope.clearAllTodoList = function() {
		$scope.models.todoLists = [];
	};
	
	/**
	 * Add new row in TODO list
	 */
	$scope.addNewRow = function(list) {
		list.items.push({
			label: 'New row',
			type: 'item',
			content: 'please add description...'}
		);
	};
	
	/**
	 * Clear all rows in TODO list
	 */
	$scope.clearList = function(list) {
		list.items = [];
	};
	
	/**
	 * Edit label TODO list
	 */
	$scope.editLabel  = function(list) {
		list.editLabel = true;
	};
	
	/**
	 * Cancel editing label TODO list
	 */
	$scope.saveLabel  = function(list) {
		list.editLabel = false;
	};
	
	/**
	 * Edit description TODO item
	 */
	$scope.editContent  = function(item) {
		item.editContent = true;
	};
	
	/**
	 * Cancel editing description TODO item
	 */
	$scope.saveContent  = function(item) {
		item.editContent = false;
	};
	
	/**
	 * Cancel editing label TODO list
	 */
	$scope.saveLabel  = function(list) {
		list.label = list.label;
		list.editLabel = false;
	};
	
	/**
	 * Open menu of list
	 */
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};

};

module.exports = TodoCtrl;