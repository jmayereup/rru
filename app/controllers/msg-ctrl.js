angular
  .module('app')
  .controller('MsgCtrl', MsgCtrl);

MsgCtrl.$inject = ["$firebaseArray", "$firebaseAuth", "login", "data"];

function MsgCtrl($firebaseArray, $firebaseAuth, login, data) {
  var vm = this;
  var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");
  // var messages = $firebaseArray(ref.child('messages'));
  vm.messages = data.messages;

  vm.canSubmit = login.canSubmit;
//Anonymous login for read-only access

  vm.addMsg = function(from, msg, tag) {
    console.log(from + " " + msg + " " + " " + tag);
    vm.messages.$add({
      'from': from,
      'body': msg,
      'tag': tag
    }).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      vm.messages.$indexFor(id); // returns location in the array
    });
  };

  vm.deleteMsg = function(id) {
    console.log("Deleting " + id);
    var arrayId = messages.$indexFor(id);
    var item = messages[arrayId];
    vm.messages.$remove(item).then(function(ref) {
      ref.key() === item.$id; // true
    });
  };

};