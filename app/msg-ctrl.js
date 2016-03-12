angular
  .module('app')
  .controller('MsgCtrl', MsgCtrl);

MsgCtrl.$inject = ["$firebaseArray", "$firebaseAuth"];

function MsgCtrl($firebaseArray, $firebaseAuth) {
  var vm = this;
  var ref = new Firebase("https://amber-torch-7838.firebaseio.com/");

  vm.authData = ref.getAuth();
  console.log("Login Provider: " + vm.authData.provider);
  vm.canSubmit = vm.authData.provider === 'google';
  console.log("Provider Valid: " + vm.canSubmit);

//Anonymous login for read-only access


//Create query here and then transform into an array and pass to an object
  var query = ref.orderByChild("from").equalTo('jrm');
  var myFire = $firebaseArray(ref);  //everything
  vm.myData = $firebaseArray(ref);
  vm.myQuery = $firebaseArray(query);

  vm.addMsg = function(from, msg, tag) {
    console.log(from + " " + msg + " " + " " + tag);
    myFire.$add({
      'from': from,
      'body': msg,
      'tag': tag
    }).then(function(ref) {
      var id = ref.key();
      console.log("added record with id " + id);
      myFire.$indexFor(id); // returns location in the array
    });
  };

  vm.deleteMsg = function(id) {
    console.log("Deleting " + id);
    var arrayId = myFire.$indexFor(id);
    var item = myFire[arrayId];
    myFire.$remove(item).then(function(ref) {
      ref.key() === item.$id; // true
    });
  };

/*  ref.authAnonymously(function(error, authData) {
    if (error) {
      console.log("Authentication Failed!", error);
    }
    else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
*/

  
};