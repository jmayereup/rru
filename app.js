angular.module('app', ['ngRoute'])

.controller('MainCtrl', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })
    .when('/e1', {
      templateUrl: 'views/e1.html',
      controller: 'MainCtrl'
    })
    .when('/e2', {
      templateUrl: 'views/e2.html',
      controller: 'MainCtrl'
    })
    .when('/e3', {
      templateUrl: 'views/e3.html',
      controller: 'MainCtrl'
    })
    .when('/resources', {
      templateUrl: 'views/resources.html',
      controller: 'MainCtrl'
    })
    .otherwise({redirectTo: '/home'});
  
}])


