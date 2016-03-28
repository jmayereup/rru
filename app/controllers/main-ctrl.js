(function() {
  'use strict';

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$firebaseArray', 'login'];

function MainCtrl($firebaseArray, login) {
    var vm = this;
    vm.canSubmit = login.canSubmit;

}

})();