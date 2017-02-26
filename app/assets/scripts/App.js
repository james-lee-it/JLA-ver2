// import Angular, Angular-route and Angular-animate
//import angular from './lib/angular.min'; put import angular from './lib/angular'?
//import './lib/angular-route'

// import controllers
//import './js/controllers'

// define myApp
var app = angular.module('myApp',[]);

// controller for databinding of blog entries 
app.controller('blogController', ['$scope', '$http', function blogController($scope, $http) {
	$http.get('./../../blogs.json').then(function(resp) {
		$scope.blogs = resp.data;
	  });
}]);

app.controller('webdevController', ['$scope', '$http', function webdevController($scope, $http) {
	$http.get('./../../webdev.json').then(function(res) {
		$scope.webdev = res.data;
	  });
}]);