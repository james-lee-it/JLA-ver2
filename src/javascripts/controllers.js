var myApp = angular.module('myApp', []);

myApp.controller('BlogController', ['$scope', '$http', function($scope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.blogs = data;
	});
}]);