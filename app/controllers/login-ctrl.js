angular
  .module('app')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ["$firebaseArray", "$scope", "login", "data"];

function LoginCtrl($firebaseArray, $scope, login, data) {
  var vm = this;
  vm.toggleNew = false;
  //var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
  var ref = data.ref;
  vm.authData = login.authData;
  console.log("L Login Provider: " + vm.authData.provider);
  vm.canSubmit = vm.authData.provider === 'google';
  console.log("L Provider Valid: " + vm.canSubmit);


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
  };

  vm.myLogin = function(username, password) {
    console.log("Login code needs work");
    ref.authWithPassword({
      email: username,
      password: password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      }
      else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };

  vm.useGoogle = function() {
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      }
      else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  }

};