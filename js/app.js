var mainApp = angular.module("mainApp", ['ngRoute','ngSanitize']);
mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

  when('/home', {
    templateUrl: 'templates/home.html'
  }).

  when('/experience', {
    templateUrl: 'templates/exp.html',
    controller: 'expCtrl'
  }).

  when('/education', {
    templateUrl: 'templates/edu.html',
    controller: 'eduCtrl'
  }).

  when('/other', {
    templateUrl: 'templates/other.html'
  }).

  when('/hobbies', {
    templateUrl: 'templates/hobbies.html'
  }).

  when('/projects', {
    templateUrl: 'templates/projects.html'
  }).

  otherwise({
  redirectTo: '/home'
});
}]);
