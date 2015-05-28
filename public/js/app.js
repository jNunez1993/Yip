var app = angular.module('app',['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home/home.html',
			controller: 'HomeController'
		})
		.when('/signup',{
			templateUrl: 'views/signup/signup.html',
			controller: 'SignupController'
		})
		.when('/login',{
			templateUrl: 'views/login/login.html',
			controller: 'LoginController'
		})
		.when('/profile', {
			templateUrl: 'views/profile/profile.html',
			controller: 'ProfileController',
			resolve: {
				logincheck: checkLogin 
			}
		})
		.otherwise({
			redirectTo: '/home'
		})
});



function checkLogin($q, $timeout,$http,$location,$rootScope){
	var deferred = $q.defer();
	$http.get('/loggedin').success(function(user){
		$rootScope.errorMessage=null;
		if(user!=='0'){
			$rootScope.currentUser=user;
			deferred.resolve();
		}
		else{
			$rootScope.errorMessage = "You need to log in";
			deferred.reject();
			$location.url('/login');
		}
	});
	return deferred.promise
}