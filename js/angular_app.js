var docdbApp = angular.module('docdbApp', [
  'ngRoute',
  'docdbControllers'
]);
 
docdbApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/documentation', {
        templateUrl: 'docdb-front.html',
        controller: 'PackageListCtrl'
      }).
      when('/packages/:packageId', {
        templateUrl: 'package-detail.html',
        controller: 'PackageDetailCtrl'
      }).
      otherwise({
        redirectTo: '/documentation'
      });
  }]);