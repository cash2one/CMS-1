(function(){
  // 模块声明
  angular.module('user', [ 'ngMaterial' ]);
  // 模块定义
  angular.module('user')
      .service('userService', ['$q', UserService]);

  /**
   * User DataService
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = {
      name: '',
      token: '',
      privileges: [],
      info: {},
      'getInfo': function () {
        return this.info;
      },
      'isLoggedIn': function () {

      },
      'hasPermissionTo': function (operation) {

      }
    };

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
