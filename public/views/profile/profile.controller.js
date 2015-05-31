angular.module('app')
.controller('ProfileController', function($rootScope,$scope,$location,$http){
		var id=$rootScope.currentUser._id;
		console.log(id);

		$scope.changePassword = function(){
			if($scope.newPassword0 === $scope.newPassword1){
				var data={currentPassword:$scope.currentPassword, newPassword0:$scope.newPassword0,newPassword1:$scope.newPassword1};
				$http.post('/changePassword',data)
					.success(function(response){
						clearFields();
						alert(response);
					});
			}
			else{
				clearFields();
				alert("New password does not match");
			}
		};


		var clearFields= function(){
			$scope.currentPassword="";
			$scope.newPassword0="";
			$scope.newPassword1="";
		}
	
});