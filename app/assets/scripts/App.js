// import angular and angular-ui-router
import 'angular';
import 'angular-ui-router';
import 'angular-backtop';

// define app as angular's main module
var app = angular.module('myApp',[
	'ui.router',
	'angular.backtop'
]);

// config routing
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


// define controller
app.controller('blogController', ['$scope', '$http', function blogController($scope, $http) {
	$http.get('./../../blogs.json').then(function(resp) {
		$scope.blogs = resp.data;
	  });
}]);

app.controller('webdevController', ['$scope', '$http', '$stateParams', function webdevController($scope, $http, $stateParams) {
	$http.get('./../../webdev.json').then(function(res) {
		$scope.webdev = res.data;
		$scope.webdevResourceOrder = 'description';
		$scope.whichItem = $stateParams.itemId;
	  });
}]);