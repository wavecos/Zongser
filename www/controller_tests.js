
var myAppModule = angular.module('myApp', []);

myAppModule.controller('HelloController', function ($scope) {
	var greeting = { text: "Hello" };

	$scope.resetToDefault = function() {
		$scope.greeting = greeting;
	};
});

myAppModule.controller('MenuController', function ($scope) {

	$scope.menuState = { show: false };

	$scope.toggleMenu = function () {
		$scope.menuState.show = !$scope.menuState.show;
	};

});


