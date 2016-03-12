angular.module('app', ['ngRoute', 'firebase'])


.controller('MainCtrl',
  function($firebaseArray) {

  })



.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'MsgCtrl',
      controllerAs: 'vm'
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
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    })
    .when('/create', {
      templateUrl: "views/create.html",
      controller: 'CreateCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/home'});
  
}])


