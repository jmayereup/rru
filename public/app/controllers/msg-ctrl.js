angular
    .module('app')
    .controller('MsgCtrl', MsgCtrl);

MsgCtrl.$inject = ["$firebaseArray", "$firebaseAuth", "login", "data"];

function MsgCtrl($firebaseArray, $firebaseAuth, login, data) {
    var vm = this;
    var ref = data.ref;
    vm.messages = data.messages;
    vm.canSubmit = login.canSubmit;

    vm.addMsg = function(m) {
        console.log(m);
        vm.messages.$add(m).then(function(ref) {
            var id = ref.key();
            console.log("added record with id " + id);
            vm.messages.$indexFor(id); // returns location in the array
        });
    };
    // var firepadRef = new Firebase('https://amber-torch-7838.firebaseio.com/firepads/');
    // var codeMirror = CodeMirror(document.getElementById('firepad'), {
    //     lineWrapping: true
    // });
    // var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
    //     richTextShortcuts: true,
    //     richTextToolbar: true,
    //     defaultText: 'Hello, World!'
    // });


};
