angular
  .module('app')
  .controller('LinkCtrl', LinkCtrl);

LinkCtrl.$inject = ["$firebaseArray", "$scope", "login", "data", "nav"];

function LinkCtrl($firebaseArray, $scope, login, data, nav) {

  var vm = this;
  var ref = data.ref;
  vm.links = data.links;
  vm.cls = data.cls;
  vm.units = data.units;
  vm.showMe = false;
  vm.item = {};
  vm.canSubmit = login.canSubmit;
  console.log("Can Submit: " + vm.canSubmit);

  vm.nav = nav;

  vm.tinymceOptions = {
    menubar: false,
    plugins: "image",
    height:80
    };

/*  vm.addLink = function(l) {
    console.log(l);
    l.showMe = false;
    vm.links.$add(l).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      vm.links.$indexFor(id); // returns location in the array
    });
  };*/

  vm.updateLink = function(item) {
    item.showMe = false;
    if (item.$id === undefined) {
      vm.links.$add(item).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      vm.links.$indexFor(id); // returns location in the array
      vm.item ={};
      return 0;
    });
    }
    if (item.$id != undefined){
    vm.links.$save(item).then(function(ref) {
      ref.key() === item.$id;
      console.log(item);
      return 0;
    });
    }
  };

  vm.loadLink = function(l) {
    vm.item = l;
    //vm.links.$save(l);
  };
 
}
