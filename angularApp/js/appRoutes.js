angular.module('appRoute', []).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/', '/login').otherwise('/');

    $stateProvider.state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'view/login.html'
    }).state('userInfo', {
        url: '/userInfo',
        controller: 'UserInfoController',
        templateUrl: 'view/userInfo.html',
        params:{
          user:{
            value:null
          }
        }
    });

}]);
