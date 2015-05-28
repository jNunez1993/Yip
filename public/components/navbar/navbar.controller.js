angular.module('app')
	.controller('NavbarController',function($rootScope,$scope,$http,$location){

		$scope.logout = function(){
			$http.post('/logout')
				.success(function(response){
					$rootScope.currentUser=null;
					console.log(response);
				});
		};


	});