angular.module('app')
	.controller("SignupController",function($rootScope,$scope,$http,$location){
		
		$scope.signup = function(){
			var user= {username:$scope.username, password:$scope.password};
			$http.post('/signup',user)
				.success(function(response){
					if(response==="User already exists"){
						$scope.alert="User already exists";
					}
					else{
						$rootScope.currentUser=user;
						$location.url('/profile');
					}
				});
		};
		

	});