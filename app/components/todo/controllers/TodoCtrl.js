'use strict';

var TodoCtrl = function($scope, $timeout, $mdSidenav) {
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
	 *
	 * @param {array} list
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
	 *
	 * @param {array} list
	 */
	$scope.clearList = function(list) {
		list.items = [];
	};
	
	/**
	 * Edit label TODO list
	 *
	 * @param {object} item
	 */
	$scope.editLabel = function(item) {
		item.editLabel = true;
	};
	
	/**
	 * Cancel editing label TODO list
	 *
	 * @param {object} item
	 */
	$scope.saveLabel = function(item) {
		item.editLabel = false;
	};
	
	/**
	 * Edit description TODO item
	 *
	 * @param {object} item
	 */
	$scope.editContent = function(item) {
		item.editContent = true;
	};
	
	/**
	 * Cancel editing description TODO item
	 *
	 * @param {object} item
	 */
	$scope.saveContent = function(item) {
		item.editContent = false;
	};
	
	/**
	 * Cancel editing label TODO list
	 *
	 * @param {object} item
	 */
	$scope.saveLabel = function(item) {
		item.editLabel = false;
	};
	
	/**
	 * Copy item list or row
	 * 
	 * @param {object} item
	 * @param {array} list
	 */
	$scope.copyItem = function(item, list) {
		var copyItem = angular.copy(item);

		copyItem.label = 'Copy of ' + item.label;
		copyItem.editContent = false;
		copyItem.editLabel = false;
		
		if (copyItem.items) {
			angular.forEach(copyItem.items, function(item) {
				item.editContent = false;
			});
		}
		
		list.push(copyItem);
	};
	
	/**
	 * Remove item list or row
	 * 
	 * @param {array} list
	 * @param {number} index
	 */
	$scope.deleteItem = function(list, index) {
		list.splice(index, 1);
	};

	
	/**
	 * Open menu of list
	 */
	$scope.openMenu = function($mdOpenMenu, ev) {
		$mdOpenMenu(ev);
	};

};

module.exports = TodoCtrl;