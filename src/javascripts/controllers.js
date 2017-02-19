var myApp = angular.module('myApp', []);

myApp.controller('BlogController', ['$scope', '$http', function($scope, $http) {
	$http.get('data.json').then(function(response) {
		$scope.blogs = response.data;
	  });
}]);

/*
Finding:
- data.json has to be in the same folder as the controllers.js for it to work
- json file has to be named data when using response.data.
*/