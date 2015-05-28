angular.module('app')
	.controller('LoginController',function($rootScope,$scope,$http,$location){
		$scope.login = function(){
			var user = {username: $scope.username, password: $scope.password};
			$http.post("/login",user)
				.success(function(response){
					console.log(response);
					$rootScope.currentUser=user; 
				});
		};


	});