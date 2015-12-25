'use strict';

var TodoCtrl = function($scope, $rootScope, $state, $stateParams, $timeout, $mdSidenav) {
	'ngInject';
	
	console.log('TodoCtrl');
	
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};

};

module.exports = TodoCtrl;