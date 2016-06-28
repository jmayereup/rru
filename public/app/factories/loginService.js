(function() {
  'use strict';

  angular
    .module('app')
    .factory("login", login);

  function login($firebaseArray, data, $location) {
    var ref = data.ref;
    var vm = this;
    vm.canSubmit = {};
    vm.canSubmit = false;
    vm.authData =
    //ref.authAnonymously(authHandler); /anonymous login.

    this.useGoogle = function() {
      ref.authWithOAuthPopup("google", this.authHandler);
    };
    this.useFacebook = function() {
      ref.authWithOAuthPopup("facebook", this.authHandler);
    };
    this.useEmail = function(userEmail, userPassword) {
      ref.authWithPassword({
        email: userEmail,
        password: userPassword
      }, authHandler);
    };

    // Create a callback to handle the result of the authentication
    this.authHandler = function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      }
      else {
        console.log("User " + authData.uid + " is logged in with " + authData.provider + authData);
        vm.canSubmit = authData.provider === 'google';
        vm.authData = authData;
        if (vm.canSubmit == true) {
          console.log("Can Submit too!");
          return true;
        }
      }
    };

    this.createUser = function(username, password) {
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

    return vm;
  }
})();
