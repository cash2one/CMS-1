(function () {
  angular
      .module('cms')
      .config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    // $locationProvider.html5Mode(true);
    // 全局路由表
    $routeProvider.when('/login', {
      templateUrl: 'views/login/login.html',
      controller: 'LoginController',
      page_title: '登录'
    }).when('/fourZeroFour', {
      templateUrl: 'views/404.html',
      controller: 'fourZeroFour_controller',
      page_title: '没找到'
    }).otherwise({
      redirectTo: '/login'
    });

    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    //$httpProvider.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"};
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);
})();