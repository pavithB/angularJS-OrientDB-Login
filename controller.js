var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'login.html'
	})
	.when('/dashboard', {
		resolve: {
			"check" : function($location, $rootScope){
				if(!$rootScope.loggedIn) {
					$location.path('/');
				} 
			}
		},
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});

app.controller('loginCtrl', function($scope,$http,$window,$location,$rootScope){
	$scope.submit = function(){


		var uname = $scope.username;  //$rootscope
		var password = $scope.password;

//check data base and give access



$http({
			method:'GET',
			url:'http://localhost:2480/query/ApplicationData/sql/select * from login where username=\'' + uname + '\' AND password =\'' + password + '\'',
			headers: {
				'Authorization':'Basic cm9vdDowMzMyMjIwNTU5',
			}
		})

.then(function(response){
			if (response.data.result.length == 0){
				alert('incorrect login credentials. please enter correct username and password')
				console.log("unable to log, diske ammata diske diskade");
				$rootScope.loggedIn = false;

			} else {
				
				console.log("done!");
				$rootScope.loggedIn = true;
				$location.path('/dashboard');
				
			}
		});






        // .then(function(response){
        //     if(validate(response,userPassword)){
        //      console.log($scope.userData = response.data.result[0]);
        //     $scope.userData = response.data.result[0];
        //     $rootScope.loggedIn = true;
		// 	$location.path('/dashboard');

        //     }else{
				
		// 		alert('Incorrect Information');

		// 	}

        // });





		// if($scope.username == 'aa' && $scope.password == 'aa'){
		// 	$rootScope.loggedIn = true;
		// 	$location.path('/dashboard');
		// } else {
		// 	alert('Incorrect Information');
		// }
 	}
 });



app.controller('dashboardCtrl', function($scope, $location, $rootScope, $http, $window){
// 	$scope.update = function(){


// 		var details = $scope.details;  //$rootscope
// 	// alert(details);
// //databbase update




// $http({
// 			method:'PUT',
// 			// url:'http://localhost:2480/query/ApplicationData/sql/UPDATE login SET details =\'' + details + '\' WHERE username = a',
// 						url:'http://localhost:2480/query/ApplicationData/sql/UPDATE login SET details = \'2222222\' WHERE username = \'a\'',
// 			headers: {
// 				'Authorization':'Basic cm9vdDowMzMyMjIwNTU5',
// 			}
// 		})

// .then(function(response){
// 			if (response.data.result.length == 0){
// 				alert('error')
// 				console.log("unable to log, diske ammata diske diskade");


// 			} else {
// 				alert('done')
// 				console.log("Hola!");
// 				$rootScope.loggedIn = true;

				
// 			}
// 		});


	$scope.clear = function(){


$scope.name = "";
$scope.age = "";
$scope.mobile = "";


console.log("clear");
		


 

	}


	$scope.update = function(){

		$http({
			method:'POST',
			url:'http://localhost:2480/command/ApplicationData/sql/INSERT INTO details SET name = \''+ $scope.name + '\', age= \'' + $scope.age + '\', mobile = \'' + $scope.mobile + '\'',
			headers: {
				'Authorization':'Basic cm9vdDowMzMyMjIwNTU5'
			}  
		})
		.then(function(response){
			console.log("updated");
			alert('record added')
		});

$scope.name = "";
$scope.age = "";
$scope.mobile = "";

		


	}


	$scope.display = function(){




//check data base and give access
$scope.disdata = {}



// $http({
// 		method:'GET',
// 		url:'http://localhost:2480/command/pocdb/sql/select * from students',
// 		headers: {
// 			'Authorization':'Basic cm9vdDpkYg=='
// 		}
// 	})
// 	.then(function(response){
// 		$scope.students = response.data.result;
// 	});

$http({
			method:'GET',
			url:'http://localhost:2480/command/ApplicationData/sql/select * from details',
			headers: {
				'Authorization':'Basic cm9vdDowMzMyMjIwNTU5',
			}
		})

.then(function (response) {

	
	$scope.disdata = response.data.result;

});

	}

})
