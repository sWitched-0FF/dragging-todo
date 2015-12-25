'use strict';

var TodoCtrl = function($scope, $rootScope, $state, $stateParams, $timeout, $mdSidenav) {
	'ngInject';
	
	console.log('TodoCtrl');
	
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};
	
	$scope.models = {
        selected: null,
        todoLists: {"A": [], "B": [], "C": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.todoLists.A.push({label: "Item A" + i});
        $scope.models.todoLists.B.push({label: "Item B" + i});
        $scope.models.todoLists.C.push({label: "Item C" + i});
    }

};

module.exports = TodoCtrl;