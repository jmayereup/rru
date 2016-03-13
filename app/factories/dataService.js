(function() {
  'use strict';
angular.module('app')

.factory("data", data);
function data($firebaseArray)
{
  var vm = this;
  var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
  vm.ref = ref;
  vm.root = $firebaseArray(ref);
  vm.messages = $firebaseArray(ref.child('messages'));
  vm.links = $firebaseArray(ref.child('links'));
  vm.authData = ref.getAuth();
return vm;
};

})();