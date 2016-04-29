(function(){
  // 所有模块的声明
  angular.module('user', ['ngMaterial']);
  angular.module('list', ['ngMaterial']);
  angular.module('detail', ['ngMaterial']);
  angular.module('cms', ['ngRoute','ngMaterial', 'user', 'list', 'detail']);
})();
