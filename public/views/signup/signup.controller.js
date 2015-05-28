angular.module('app')
	.controller("SignupController",function($rootScope,$scope,$http,$location){
		
		$scope.signup = function(){
			var user= {username:$scope.username, password:$scope.password};
			$http.post('/signup',user)
				.success(function(response){
					console.log(response);
				});
		};
		

	});