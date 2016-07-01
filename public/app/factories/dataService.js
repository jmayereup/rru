(function() {
  'use strict';
  angular.module('app')

  .factory("data", data);

  function data($firebaseArray, $firebaseObject) {
    var vm = this;
    var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
    vm.ref = ref;
    vm.messages = $firebaseArray(ref.child('msgs'));
    vm.links = $firebaseArray(ref.child('links').orderByChild('order'));
    vm.cls = $firebaseArray(ref.child('cls'));
    vm.authData = ref.getAuth();

    return vm;


  }

})();
