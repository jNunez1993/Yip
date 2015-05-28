var app = angular.module('app',['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home/home.html',
			controller: 'HomeController'
		})
		.otherwise({
			redirectTo: '/home'
		})
});

