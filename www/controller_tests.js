function HelloController($scope) {
	$scope.greeting = { text: "Hello" };

	$scope.resetToDefault = function() {
		$scope.greeting = { text: "eliminado" };
	};

}
