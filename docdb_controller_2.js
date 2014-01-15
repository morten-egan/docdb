docdbControllers.controller('PackageDetailCtrl', ['$scope', '$routeParams', 'docdbDataFac',
  function($scope, $routeParams, docdbDataFac) {
    $scope.packageId = $routeParams.packageId;
    $scope.packages = docdbDataFac.sharedObject;

    $scope.proc_count = 0;
    $scope.func_count = 0;

    for (var i = 0; i < $scope.packages.packagelist.length; i++) {
    	if ($scope.packages.packagelist[i].id == $scope.packageId) {
    		for (var y = 0; y < $scope.packages.packagelist[i].programs.length; y++) {
    			if ($scope.packages.packagelist[i].programs[y].programType == 'PROCEDURE') {
    				$scope.proc_count++;
    			} else if ($scope.packages.packagelist[i].programs[y].programType == 'FUNCTION') {
    				$scope.func_count++;
    			}
    		}
    	}
    };
  }]);

docdbControllers.controller('PackageListCtrl', ['$scope', 'docdbDataFac', 
	function ($scope, docdbDataFac) {
  		$scope.packages = docdbDataFac.sharedObject;
	}]);