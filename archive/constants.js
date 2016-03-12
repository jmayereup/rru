(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('FIREBASE_URL', 'https://qm1.firebaseio.com/')
    .constant('PROTECTED_PATHS', ['/waitlist']);

})();
