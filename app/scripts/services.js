'use strict'
var services = angular.module('hireboardApp.services', []);

services.factory('student', function ($http) {
	function load(path, params) {
		return $http.jsonp('http://localhost:3000/listStudents')
	}
	
});