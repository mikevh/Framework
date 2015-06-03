angular.module('app').controller('demoSelectLocationController', ['$scope', 'dataService', function($scope, dataService) {
    $scope.isLoaded = false;

    dataService.getLocations().then(function (data) {
        $scope.locations = data;
        $scope.isLoaded = true;

        for (var i = 0; i < data.length; i++) {
            if (data[i].id == $scope.item.settings.id) {
                $scope.selectedLocation = data[i];
            }
        }
    });

    $scope.saveSettings = function() {
        $scope.item.settings.id = $scope.selectedLocation.id;
        $scope.$parent.selectedLocation = $scope.selectedLocation;
        $scope.$close();
    };
}]);