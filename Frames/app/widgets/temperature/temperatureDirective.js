angular.module('app').directive('demoTemperature', ['dataService', function(dataService) {
    return {
        templateUrl: 'app/widgets/temperature/temperatureTemplate.html',
        link: function (scope, el, attrs) {
            scope.isLoaded = false;
            scope.hasError = false;
            scope.selectedLocation = null;

            scope.loadLocation = function () {
                scope.hasError = false;
                dataService.getLocation(scope.item.settings.id).then(function(data) {
                    scope.selectedLocation = data;
                    scope.isLoaded = true;
                    scope.hasError = false;
                }, function() {
                    scope.hasError = true;
                });
            };

            scope.loadLocation();

            
        }
    };
}]);