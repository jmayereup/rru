(function() {
  'use strict';
  angular.module('app')

  .factory("data", data);

  function data($firebaseArray, $firebaseObject) {
    var vm = this;
    var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
    //var refUnits = new Firebase("https://amber-torch-7838.firebaseio.com/units");
    // vm.refUrl = "https://amber-torch-7838.firebaseio.com/";
    vm.ref = ref;
    // vm.root = $firebaseArray(ref);
    vm.messages = $firebaseArray(ref.child('msgs'));
    // vm.units = $firebaseArray(ref.child('units').orderByChild('unit'));
    vm.links = $firebaseArray(ref.child('links').orderByChild('order'));
    vm.cls = $firebaseArray(ref.child('cls'));
    vm.authData = ref.getAuth();

    return vm;


  }

})();
