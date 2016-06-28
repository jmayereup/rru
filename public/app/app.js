var app = angular.module('app', ['ngRoute', 'firebase', 'ui.tinymce', 'ngSanitize'])

.filter("myHtml", ['$sce', function($sce) {
  return function(htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };
}])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/views/home.html'
      })
      .when('/class', {
        templateUrl: 'app/views/class.html',
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


  }
]);
