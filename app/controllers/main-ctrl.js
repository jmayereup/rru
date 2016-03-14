(function() {
  'use strict';

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$firebaseArray', 'data', 'login'];

function MainCtrl($firebaseArray, data, login) {
    var vm = this;
    vm.links = data.links;
    console.log("e1 " + vm.e3);
    console.log("cl " + data.e3);
};

})();