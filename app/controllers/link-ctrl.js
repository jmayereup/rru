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
    plugins: "image media imagetools autolink link",
    toolbar: false,
    height: 80
    };
    

  vm.updateLink = function(item) {
    item.showMe = false;
    if (item.$id === undefined) {
      vm.links.$add(item).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      vm.links.$indexFor(id); // returns location in the array
      vm.item ={};
      vm.item.clsName = item.clsName;
      vm.item.unit = item.unit;
      return 0;
    });
    }
    if (item.$id != undefined){
    vm.links.$save(item).then(function(ref) {
      ref.key() === item.$id;
      console.log(item);
      vm.item ={};
      vm.item.clsName = item.clsName;
      vm.item.unit = item.unit;
      return 0;
    });
    }
  };

/*  vm.editLink = function(item) {
    if(item.showMe === undefined) item.showMe = true;
    item.showMe = !item.showMe;
    vm.links.$save(item).then(function() {
    });
  };*/

  vm.loadLink = function(l) {
    vm.item = l;
    //vm.links.$save(l);
  };
 
}
