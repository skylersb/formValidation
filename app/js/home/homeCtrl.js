var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope) {

	$scope.showSignUpBtn = false;
	$scope.showLoginBtn = false;

	$scope.signUpBtn = function(){
		$scope.showSignUpBtn = !$scope.showSignUpBtn;
		$scope.showLoginBtn = false;
	}

	$scope.loginBtn = function(){
		$scope.showLoginBtn = !$scope.showLoginBtn;
		$scope.showSignUpBtn = false;
	}

})