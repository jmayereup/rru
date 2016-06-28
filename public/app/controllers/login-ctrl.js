angular
  .module('app')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ["$firebaseArray", "$scope", "login"];

function LoginCtrl($firebaseArray, $scope, login) {
  var vm = this;
  vm.canSubmit = false;
  // var authData = login.authData;
  //vm.toggleNew = false;
  //var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
  // var ref = data.ref;
  // var authData = ref.getAuth();

  vm.canEdit = function() {vm.canSubmit = login.canSubmit;};


}
