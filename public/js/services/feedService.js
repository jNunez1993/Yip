angular.module('app')
	.service('feedService',function($rootScope,$http){


		var addToFeed = function(post){
			$http.post('/feed',{post: post, postedBy: $rootScope.currentUser.username})
				.success(function(response){
					console.log(response);
				});
		};

		var getFeed = function(){
			return $http.get('/feed')
				.success(function(response){
					
				});
		};



		return {
			addToFeed: addToFeed,
			getFeed: getFeed
		};
	});