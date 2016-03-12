angular
  .module('app')
  .controller('CreateCtrl', CreateCtrl);

CreateCtrl.$inject = ["$firebaseArray", "$scope"];

function CreateCtrl($firebaseArray, $scope) {
  var vm = this;
  var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");

  vm.authData = ref.getAuth();
  console.log("Login Provider: " + vm.authData.provider);
  vm.canSubmit = vm.authData.provider === 'google';
  console.log("Provider Valid: " + vm.canSubmit);

};