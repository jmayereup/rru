var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'app/views/home.html'
    })
    .when('/e1', {
      templateUrl: 'app/views/e1.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    })
    .when('/e2', {
      templateUrl: 'app/views/e2.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    })
    .when('/e3', {
      templateUrl: 'app/views/e3.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    })
    .when('/other', {
      templateUrl: 'app/views/other.html',
      controller: 'MainCtrl',
      controllerAs: 'vm'
    })
    .when('/login', {
      templateUrl: 'app/views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    })
    .when('/setup', {
      templateUrl: "app/views/setup.html",
      controller: 'SetupCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/home'
    });

}])
