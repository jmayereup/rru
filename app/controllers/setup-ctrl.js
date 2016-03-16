angular
  .module('app')
  .controller('SetupCtrl', SetupCtrl);

SetupCtrl.$inject = ["$firebaseArray", "$scope", "login", "data"];

function SetupCtrl($firebaseArray, $scope, login, data) {
  var vm = this;
  var ref = data.ref;
  //vm.links = data.links;
  vm.cls = data.cls;
  //vm.units = data.cls.child("units");
  //vm.loadedItem = {};
  vm.showMe = false;


  vm.canSubmit = login.canSubmit;
  console.log("SetupCtrl - Can Submit: " + vm.canSubmit);



  vm.addCls = function(l, m) {
    l = l.$push(m);
    vm.cls.$add(l).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      vm.cls.$indexFor(id); // returns location in the array
    });
    
  };

  vm.deleteCls = function(id) {
    console.log("Deleting " + id);
    var arrayId = vm.cls.$indexFor(id);
    var item = vm.cls[arrayId];
    vm.cls.$remove(item).then(function(ref) {
      ref.key() === item.$id; // true
    });
  };

  vm.updateCls = function(item) {
    item.showMe = false;
    vm.cls.$save(item).then(function(ref) {
      ref.key() === item.$id;
      console.log(item);
      return 0;
    });

  };

}
