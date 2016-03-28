angular
  .module('app')
  .controller('NavCtrl', NavCtrl);

NavCtrl.$inject = ["nav", "$location"];

function NavCtrl(nav, $location) {

  var vm = this;
  vm.cls = nav.cls; //for menu
  console.log("Nav1: " + vm.clsName);
  
  vm.assignCls= function(item) {
    nav.clsName = item;
    vm.clsName = item;
    $location.path('/class');
    console.log("Nav2: " + nav.clsName);
    return item;
  };
}

