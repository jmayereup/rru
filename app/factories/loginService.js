(function() {
  'use strict';

  angular
    .module('app')
    .factory("login", login);

  function login($firebaseArray, data) {
    var ref = data.ref;
    var vm = this;
    vm.canSubmit = false;

    //ref.authAnonymously(authHandler); /anonymous login.

    this.useGoogle = function() {
      ref.authWithOAuthPopup("google", authHandler);
    };
    this.useFacebook = function() {
      ref.authWithOAuthPopup("facebook", authHandler);
    };
    this.useEmail = function(userEmail, userPassword) {
      ref.authWithPassword({
        email: userEmail,
        password: userPassword
      }, authHandler);
    };


    // Create a callback to handle the result of the authentication
    function authHandler(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      }
      else {
        console.log("User " + authData.uid + " is logged in with " + authData.provider + authData);
        vm.canSubmit = authData.provider === 'google';
        if (vm.canSubmit == true) {
          console.log("Can Submit too!");
        }
      }
    }

    return vm;
  }
})();