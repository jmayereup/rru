angular.module('app', ['firebase'])

.controller('MainCtrl', ['$scope', '$firebaseArray', 
function($scope, $firebaseArray) {
 
 
 
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
}
]);