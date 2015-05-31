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

	$scope.feed= getFeed();



});