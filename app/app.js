var app = angular.module('app', ['ngRoute', 'firebase']);

app.controller('MainCtrl',
  function($firebaseArray) {

  });

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/views/home.html',
    })
    .when('/e1', {
      templateUrl: 'app/views/e1.html',
      controller: 'MainCtrl'
    })
    .when('/e2', {
      templateUrl: 'app/views/e2.html',
      controller: 'MainCtrl'
    })
    .when('/e3', {
      templateUrl: 'app/views/e3.html',
      controller: 'MainCtrl'
    })
    .when('/resources', {
      templateUrl: 'app/views/resources.html',
      controller: 'MainCtrl'
    })
    .when('/login', {
      templateUrl: 'app/views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    })
    .when('/create', {
      templateUrl: "app/views/create.html",
      controller: 'CreateCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/home'
    });

}])
