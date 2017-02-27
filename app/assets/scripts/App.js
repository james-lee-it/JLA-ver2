// import Angular, Angular-route and Angular-animate
//import angular from './lib/angular.min'; put import angular from './lib/angular'?
//import './lib/angular-route'

// import controllers
//import './js/controllers'

// define myApp

import 'angular';
import 'angular-ui-router';

var app = angular.module('myApp',[
	'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('webdev', {
			url: '/webdev',
			templateUrl: './../../webdev.html',
			controller: 'webdevController'
			})

		.state('home', {
			url: '/home',
			templateUrl: './../../home.html'
		})

		.state('blog', {
			url: '/blog',
			templateUrl: './../../blog.html',
			controller: 'blogController'
		})
		.state('healthcare', {
			url: '/healthcare',
			templateUrl: './../../healthcare.html'
		});

	$urlRouterProvider.otherwise('/home');
}]);

app.controller('blogController', ['$scope', '$http', function blogController($scope, $http) {
	$http.get('./../../blogs.json').then(function(resp) {
		$scope.blogs = resp.data;
	  });
}]);

app.controller('webdevController', ['$scope', '$http', function webdevController($scope, $http) {
	$http.get('./../../webdev.json').then(function(res) {
		$scope.webdev = res.data;
		$scope.webdevResourceOrder = 'description';
	  });
}]);