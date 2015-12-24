'use strict';

require('angular');
require('angular-animate');
require('angular-bootstrap');
require('angular-ui-router');


/**
 * @name todo
 *
 * @description
 * The main module of todo app
 */
var todo = angular.module('todo', [
	'ui.router',
	'ui.bootstrap',
	'ngAnimate'
]);

todo.config(function($stateProvider, $urlRouterProvider, $httpProvider, $rootScopeProvider) {
	var DIR = './components/todo/templates';

	$stateProvider
		.state('todo', {
			url: '/',
			templateUrl: DIR + '/todo-main.html',
			controller: 'TodoCtrl'
		});
	$urlRouterProvider.otherwise('/');
});

todo.controller('TodoCtrl', require('./controllers/TodoCtrl'));

//crm.directive('header', require('./directives/header/header'));

module.exports = todo;
