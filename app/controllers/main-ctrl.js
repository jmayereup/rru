angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$firebaseArray', 'data', 'login'];

function MainCtrl($firebaseArray, data, login) {
    var vm = this;
    vm.e3 = data.e3;
    vm.links = data.links;
};