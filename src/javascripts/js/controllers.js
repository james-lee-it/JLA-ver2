var myApp = angular.module('myApp', []);

myApp.controller('BlogController', ['$scope', '$http', function($scope, $http) {
	$http.get('data.json').then(function(response) {
		$scope.blogs = response.data;
	  });
}]);