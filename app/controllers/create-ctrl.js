angular
  .module('app')
  .controller('CreateCtrl', CreateCtrl);

CreateCtrl.$inject = ["$firebaseArray", "$scope", "login", "data"];

function CreateCtrl($firebaseArray, $scope, login, data) {
  var vm = this;
  var ref = data.ref;
  vm.links = data.links;
  vm.cls = data.cls;
  //vm.loadedItem = {};
  vm.showMe = false;


  vm.canSubmit = login.canSubmit;
  console.log("Can Submit: " + vm.canSubmit);



  vm.addLink = function(l) {
    console.log(l);
    vm.links.$add(l).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      vm.links.$indexFor(id); // returns location in the array
    });
  };

  vm.deleteLink = function(id) {
    console.log("Deleting " + id);
    var arrayId = vm.links.$indexFor(id);
    var item = vm.links[arrayId];
    vm.links.$remove(item).then(function(ref) {
      ref.key() === item.$id; // true
    });
  };

  vm.updateLink = function(item) {
    item.showMe = false;
    vm.links.$save(item).then(function(ref) {
      ref.key() === item.$id;
      console.log(item);
      return 0;
    });

  };

}
