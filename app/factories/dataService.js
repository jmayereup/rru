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
  vm.messages = $firebaseArray(ref.child('msgs'));
  vm.links = $firebaseArray(ref.child('links'));
  vm.e1 = $firebaseArray(ref.child('links').orderByChild("e1").equalTo(true));
  vm.e2 = $firebaseArray(ref.child('links').orderByChild("e2").equalTo(true));
  vm.e3 = $firebaseArray(ref.child('links').orderByChild("e3").equalTo(true));
  vm.other = $firebaseArray(ref.child('links').orderByChild("other").equalTo(true));
  vm.teacher = $firebaseArray(ref.child('links').orderByChild("teacher").equalTo(true));
  vm.authData = ref.getAuth();
return vm;
};

})();