angular
  .module('app')
  .controller('CreateCtrl', CreateCtrl);

CreateCtrl.$inject = ["$firebaseArray", "$scope"];

function CreateCtrl($firebaseArray, $scope) {
  var vm = this;
  var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
  var links = $firebaseArray(ref.child('links'));

  vm.data = {};
  vm.authData = ref.getAuth();
  console.log("cLogin Provider: " + vm.authData.provider);
  vm.canSubmit = vm.authData.provider === 'google';
  console.log("cProvider Valid: " + vm.canSubmit);

  vm.formData = function(d) {
    vm.data = d;
    links.$add(vm.data);
    console.log(vm.data);
  };

};