angular
  .module('app')
  .controller('CreateCtrl', CreateCtrl);

CreateCtrl.$inject = ["$firebaseArray", "$scope", "login", "data"];

function CreateCtrl($firebaseArray, $scope, login, data) {

  var vm = this;
  var ref = data.ref;
  vm.links = data.links;
  vm.cls = data.cls;
  vm.units = data.units;
  //vm.loadedItem = {};
  vm.showMe = false;
  vm.item = {};
  //tinymce.init({ selector:'textarea' });

  vm.canSubmit = login.canSubmit;
  console.log("Can Submit: " + vm.canSubmit);



  vm.addLink = function(l) {
    console.log(l);
    if(l.e1===undefined) l.e1=false;
    if(l.e2===undefined) l.e2=false;
    if(l.e3===undefined) l.e3=false;
    if(l.other===undefined) l.other=false;
    l.showMe = false;
    vm.links.$add(l).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      vm.links.$indexFor(id); // returns location in the array
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

  vm.editLink = function(item) {
    if(item.showMe === undefined) item.showMe = true;
    item.showMe = !item.showMe;
    vm.links.$save(item).then(function() {
    });
  };

  vm.loadLink = function(l) {
    if(l.e1===undefined) l.e1=false;
    if(l.e2===undefined) l.e2=false;
    if(l.e3===undefined) l.e3=false;
    if(l.other===undefined) l.other=false;
    vm.item = l;
    vm.links.$save(l);
  };
  
}
