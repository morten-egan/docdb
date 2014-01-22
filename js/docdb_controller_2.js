docdbControllers.factory("docdbQueryFac", function(){
    return { queryObject: "" }
});

docdbControllers.controller('PackageDetailCtrl', ['$scope', '$routeParams', '$anchorScroll','docdbDataFac', 'docdbQueryFac',
  function($scope, $routeParams, $anchorScroll, docdbDataFac, docdbQueryFac) {
  	$anchorScroll();
    $scope.packageId = $routeParams.packageId;
    $scope.packages = docdbDataFac.sharedObject;

    $scope.query = docdbQueryFac.queryObject;

    $scope.qChange = function($event) {
        console.log($event.originalEvent.srcElement.value);
        docdbQueryFac.queryObject = $event.originalEvent.srcElement.value;
        elem = $('#queryinput');
        elem.value = docdbQueryFac.queryObject;
        $scope.query = docdbQueryFac.queryObject;
    };

    $scope.queryClear = function() {
        docdbQueryFac.queryObject = "";
        elem = document.querySelector('#queryinput');
        elem.value = docdbQueryFac.queryObject;
        $scope.query = docdbQueryFac.queryObject;
        document.querySelector('#queryinput').focus();
    };

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

docdbControllers.controller('PackageListCtrl', ['$scope', '$anchorScroll', 'docdbDataFac', 'docdbQueryFac',
	function ($scope, $anchorScroll, docdbDataFac, docdbQueryFac) {
		$anchorScroll();
  		$scope.packages = docdbDataFac.sharedObject;

        $scope.query = docdbQueryFac.queryObject;

        $scope.pkgStats = [];
        for (var i = 0; i < $scope.packages.packagelist.length; i++) {
        	$scope.pkgStats[$scope.packages.packagelist[i].id] = {};
        	$scope.pkgStats[$scope.packages.packagelist[i].id].lines = 0;
        	$scope.pkgStats[$scope.packages.packagelist[i].id].dmllines = 0;
        	for (var y = 0; y < $scope.packages.packagelist[i].programs.length; y++) {
                $scope.pkgStats[$scope.packages.packagelist[i].id].lines += $scope.packages.packagelist[i].programs[y].programLineCounts.totalCodeLines;
                $scope.pkgStats[$scope.packages.packagelist[i].id].dmllines += $scope.packages.packagelist[i].programs[y].programLineCounts.totalDmlLines;
            };
        };

        $scope.qChange = function($event) {
            docdbQueryFac.queryObject = $event.originalEvent.srcElement.value;
            elem = document.querySelector('#queryinput');
            elem.value = docdbQueryFac.queryObject;
            $scope.query = docdbQueryFac.queryObject;
        };

        $scope.queryClear = function($event) {
            docdbQueryFac.queryObject = "";
            elem = document.querySelector('#queryinput');
            elem.value = docdbQueryFac.queryObject;
            $scope.query = docdbQueryFac.queryObject;
            // document.querySelector('#queryinput').focus();
        };

        $scope.$on('$includeContentLoaded', function() {
            for (var i = 0; i < $scope.packages.packagelist.length; i++) {
                var values = [],
                labels = [];
                for (var y = 0; y < $scope.packages.packagelist[i].programs.length; y++) {
                    values.push(20);
                    labels.push($scope.packages.packagelist[i].programs[y].programName);
                }
                if (y == 1) {
                    values.push(35);
                    labels.push('Other')
                }
                Raphael("pholder_" + i, "90%", "50%").pieChart(120, 100, 60, values, labels, "#fff");
            }
        });
	}]);