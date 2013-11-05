'use strict';

var app = angular.module('hireboardApp', ['hireboardApp.controllers']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/listStudents', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/listStudents' 
      });
  });
