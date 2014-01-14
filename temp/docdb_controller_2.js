docdbControllers.controller('PackageDetailCtrl', ['$scope', '$routeParams', 'myService',
  function($scope, $routeParams, myService) {
    $scope.packageId = $routeParams.packageId;
    $scope.packages = myService.sharedObject;
  }]);

docdbControllers.controller('PackageListCtrl', ['$scope', 'myService', 
	function ($scope, myService) {
  		$scope.packages = myService.sharedObject;
	}]);