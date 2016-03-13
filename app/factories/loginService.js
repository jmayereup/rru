(function() {
  'use strict';

angular
  .module('app')
  .factory("login", login);

function login($firebaseArray, data) {
  //var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
  var ref = data.ref;
  var vm = this;
  vm.authData = ref.getAuth();
  if (!vm.authData) {
    ref.authAnonymously(function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      }
      else {
        console.log("Authenticated successfully with payload:", authData);
        vm.authData = ref.getAuth();
      }
    });
  };

  console.log("F Login Provider: " + vm.authData.provider);
  vm.canSubmit = vm.authData.provider === 'google';
  console.log("F Provider Valid: " + vm.canSubmit);


  return vm;
};
})();