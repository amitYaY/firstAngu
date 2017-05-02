angular.module('LoginCtrl', []).controller('LoginController', function ($scope, $state) {

$scope.myOnClick=function(valid){

  if(valid){
    alert("form is valid");
    $state.go('userInfo',{user:$scope.user});
  }else {
    alert("form is invalid");
  }
}

})
