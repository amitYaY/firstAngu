angular.module('userInfoCtrl', []).controller('UserInfoController', function ($scope, $state,$stateParams) {
  console.log($stateParams.user);
$scope.userName=$stateParams.user.name;
console.log("loaded",$stateParams.user);

})
