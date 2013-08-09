var zongerAppModule = angular.module('ZongserApp', []);


zongerAppModule.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

/* Controllers */

zongerAppModule.controller('ListSongController', function($scope, $http){
	$scope.hello = "Hello World!";

	$http.get('dummy_songs.json').success(function(data, status, headers, config) {
		console.log('data received :: ' + data);
	});

});

/* Routes */



