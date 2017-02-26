// import Angular, Angular-route and Angular-animate
//import angular from './lib/angular.min'; put import angular from './lib/angular'?
//import './lib/angular-route'

// import controllers
//import './js/controllers'

// define myApp
var app = angular.module('myApp',[]);

// controller for databinding of blog entries 
app.controller('myController', function myController($scope, $http) {
	$http.get('./blogs.json').then(function(res) {
		$scope.blogs = res.data;
	  });
});