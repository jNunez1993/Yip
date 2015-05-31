angular.module('app')
.controller('HomeController',function($rootScope,$scope,$http,$location,feedService){


	$scope.yip = function(){
		$http.post('/yip',{post:$scope.post})
			.success(function(response){
				feedService.addToFeed($scope.post);
				getFeed();
			});

	};

	var getFeed = function(){
		var promise =feedService.getFeed();
		promise.then(
			function(payload){
				$scope.feed=payload.data;
			},
			function(errorPayload){
				console.log("error");
			});
		};


	$scope.init = function(){
	$scope.feed= getFeed();
	};


	var getUserAfterRefresh = function(){
		if($rootScope.currentUser===undefined || $rootScope.currentUser==='0'){
			$http.get('/init')
				.success(function(response){
					console.log(response);
					$rootScope.currentUser=response;
				});
			}
		};

	getUserAfterRefresh();


});