var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
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
    .otherwise({redirectTo: '/'});
  
}]);

app.controller('MainCtrl', ['$scope',
function($scope) {
 
 
 
/* //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");

          // GET MESSAGES AS AN ARRAY
          $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              var name = $scope.name || "anonymous";

              //ADD TO FIREBASE
              $scope.messages.$add({
                from: name,
                body: $scope.msg
              });

              //RESET MESSAGE
              $scope.msg = "";
            }
          };
ref.authAnonymously(function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
*/
}]);