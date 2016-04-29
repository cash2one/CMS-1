/**
 * Created by huan on 16/4/28.
 */
(function () {
  angular
      .module('cms')
      .controller('RootController', [
        '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
        RootController
      ]);

  function RootController($mdSidenav, $mdBottomSheet, $timeout, $log) {
    var self = this;
    console.log(self);
  }
})();