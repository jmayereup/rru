(function() {
  'use strict';

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$firebaseArray', 'data', 'login'];

function MainCtrl($firebaseArray, data, login) {
    var vm = this;
    vm.canSubmit = login.canSubmit;
 
    
}

})();