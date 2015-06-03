angular.module('app').directive('demoEmployee', ['dataService', function(dataService) {
    return {
        templateUrl: 'app/widgets/employee/employeeTemplate.html',
        link: function (scope, el, attrs) {
            scope.isLoaded = false;
            scope.hasError = false;
            scope.selectedEmployee = null;

            scope.loadEmployee = function () {
                scope.hasError = false;
                dataService.getEmployee(scope.item.settings.id).then(function (data) {
                    scope.isLoaded = true;
                    scope.hasError = false;
                    scope.selectedEmployee = data;
                }, function() {
                    scope.hasError = true;
                });
            };

            scope.loadEmployee();
        }
    };
}]);