'use strict';

var controllers =angular.module('hireboardApp.controllers', []);

 controllers.controller('MainCtrl', function ($scope, $http) {
    $scope.list;

    $http.get('http://localhost:3000/listStudents').then(function (data)
    {
    	$scope.list = data.data;
    	console.log(data);
    })
  });
