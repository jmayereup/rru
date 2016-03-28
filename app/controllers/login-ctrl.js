angular
  .module('app')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ["$firebaseArray", "$scope", "login", "data"];

function LoginCtrl($firebaseArray, $scope, login, data) {
  var vm = this;
  //vm.toggleNew = false;
  //var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
  var ref = data.ref;
  var authData = ref.getAuth();
  
  
  //vm.canSubmit = login.canUserSubmit;
  

  function createUser(username, password) {
    ref.createUser({
      email: username,
      password: password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      }
      else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }

   vm.useEmail = function(userEmail, userPassword) {
    login.useEmail(userEmail, userPassword);
  };
  vm.useFacebook = function() {
    login.useFacebook();
  };
  vm.useGoogle = function() {
    login.useGoogle();
  };

 




}