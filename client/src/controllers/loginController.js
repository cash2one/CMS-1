/**
 * Created by huan on 16/4/28.
 */
(function () {
  angular
      .module('cms')
      .controller('LoginController', [
        '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
        LoginController
      ]);

  function LoginController($mdSidenav, $mdBottomSheet, $timeout, $log) {
    var self = this;
    console.log('LoginController');
  }
})();