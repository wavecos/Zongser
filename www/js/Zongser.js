var zongerAppModule = angular.module('ZongserApp', []);

/*
zongerAppModule.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
*/

/* Controllers */
zongerAppModule.controller('ListSongController', function($scope, $http) {

	$scope.searchSongs = function() {
		var searchCriteria = encodeURIComponent($scope.search);
		// take a look in callback=JSON_CALLBACK in the url, I use this for JSONP callback
		var iTunesUrl = 'https://itunes.apple.com/search?callback=JSON_CALLBACK&term=' + searchCriteria + '&entity=song&limit=10';

		console.log('search criteria ' + searchCriteria);
		// Get top 10 Songs from iTunes url
		$http.jsonp(iTunesUrl).success(function(data, status, headers, config) {
			$scope.songs = data.results;
		});

	};

});

/* Routes */

zongerAppModule.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'ListSongController',
			templateUrl: 'list.html'
		}).
		when('/view/:id', {
			controller: 'DetailController',
			templateUrl: 'detail.html'
		}).
		otherwise({
			redirectTo: '/'});
});

