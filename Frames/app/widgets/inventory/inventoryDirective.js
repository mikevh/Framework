angular.module('app').directive('demoInventory', ['dataService', function(dataService) {
    return {
        templateUrl: 'app/widgets/inventory/inventoryTemplate.html',
        link: function (scope, el, attrs) {
            scope.isLoaded = false;
            scope.hasError = false;
            scope.selectedLocation = null;

            scope.loadLocation = function () {
                scope.hasError = false;
                dataService.getLocation(scope.item.settings.id).then(function (data) {
                    scope.isLoaded = true;
                    scope.hasError = false;
                    scope.selectedLocation = data;
                }, function() {
                    scope.hasError = true;
                });
            };

            scope.loadLocation();
        }
    };
}]);