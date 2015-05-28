var app = angular.module('app',['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home/home.html',
			controller: 'HomeController'
		})
		.when('/signup',{
			templateUrl: 'views/signup/signup.html'
		})
		.when('/login',{
			templateUrl: 'views/login/login.html'
		})
		.otherwise({
			redirectTo: '/home'
		})
});

