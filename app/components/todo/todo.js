'use strict';

require('angular');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('angular-ui-router');

/**
 * @name todo
 *
 * @description
 * The main module of todo app
 */
var todo = angular.module('todo', [
	'ui.router',
	'ngMaterial'
]);

todo.config(function($stateProvider, $urlRouterProvider, $httpProvider, $rootScopeProvider, $mdThemingProvider) {
	var DIR = './components/todo/templates';

	$stateProvider
		.state('todo', {
			url: '/',
			templateUrl: DIR + '/todo-main.html',
			controller: 'TodoCtrl'
		});
	$urlRouterProvider.otherwise('/');
	
	$mdThemingProvider.theme('default')
		.primaryPalette('light-green');
});

todo.controller('TodoCtrl', require('./controllers/TodoCtrl'));

module.exports = todo;
