(function() {
  'use strict';

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

.directive('jmLinks', function(){
  return {
    restrict: "E",
    templateUrl: 'app/directives/links.html',
    controller: 'CreateCtrl',
    controllerAs: 'vm'
  };
})

.directive('jmLinksForm', function(){
  return {
    restrict: "E",
    templateUrl: '/app/directives/links-form.html',
    controller: 'CreateCtrl',
    controllerAs: 'vm'
  };
  
})

.directive('jmList', function() {
  return {
    restrict: "E",
    templateUrl: 'app/directives/list.html',
    controller: 'CreateCtrl',
    controllerAs: 'vm'
  };
});

})();