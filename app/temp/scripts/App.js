/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	// import Angular, Angular-route and Angular-animate
	//import angular from './lib/angular.min'; put import angular from './lib/angular'?
	//import './lib/angular-route'

	// import controllers
	//import './js/controllers'

	// define myApp
	var app = angular.module('myApp', []);

	// controller for databinding of blog entries 
	app.controller('blogController', ['$scope', '$http', function blogController($scope, $http) {
		$http.get('./../../blogs.json').then(function (resp) {
			$scope.blogs = resp.data;
		});
	}]);

	app.controller('webdevController', ['$scope', '$http', function webdevController($scope, $http) {
		$http.get('./../../webdev.json').then(function (res) {
			$scope.webdev = res.data;
			$scope.webdevResourceOrder = 'description';
		});
	}]);

/***/ }
/******/ ]);