angular.module('app')
	.service('feedService',function($http){

		var currentFeed;

		var addToFeed = function(post){
			$http.post('/feed',{post: post})
				.success(function(response){
					console.log(response);
				});
		};

		var getFeed = function(){
			return $http.get('/feed')
				.success(function(response){
					currentFeed=response;
				});
		};



		return {
			addToFeed: addToFeed,
			getFeed: getFeed
		};
	});