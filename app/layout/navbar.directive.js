angular.module('app')

.directive('jmNavbar', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/layout/navbar.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  };
})
