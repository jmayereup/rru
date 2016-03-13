angular.module('app')

.directive('jmNavbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/navbar.html',
  };
})

.directive('jmMsgBoard', function() {
  return {
    restrict: "E",
    templateUrl: 'app/directives/msgBoard.html',
    controller: 'MsgCtrl',
    controllerAs: 'vm'
  };

})
